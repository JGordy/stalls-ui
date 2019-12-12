import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/ImageUploader.css';

import {
    FileInput,
    Hero,
    MiniButton,
    ProfileImage,
} from './index';

/**
 * `ImageUploader` allows a user to upload an image to your app
 */
const ImageUploader = ({
    coverImgSrc,
    getImageState,
    heading,
    profileImgSrc,
    onSubmit,
    roundImage = true,
    ...rest
}) => {
    const [coverImage, setCoverImage] = useState({
        file: '',
        src: coverImgSrc || '',
    });
    const [profileImage, setProfileImage] = useState({
        file: '',
        src: profileImgSrc || '',
    });
    const [roundedProfile, setRoundedProfile] = useState(roundImage);
    const [imagesChanged, setImagesChanged] = useState(false);

    useEffect(() => {
        // Sends state data to parent in use cases where this component isn't used to save images
        if (getImageState) {
            getImageState({
                coverImage,
                profileImage,
                roundedProfile,
            });
        }
    }, [getImageState, coverImage, profileImage, roundedProfile]);

    // TODO: Fix issue where if I select a photo then cancel changes, I can't reselect the same photo??
    const handleImageChange = (event, type) => {
        if (event && event.target.files) {
            event.preventDefault();
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                const imageResults = {
                    file: file,
                    src: reader.result,
                };

                setImagesChanged(true);
                if (type === 'cover') setCoverImage({ ...imageResults });
                if (type === 'profile') setProfileImage({ ...imageResults });
            };
            reader.readAsDataURL(file);
        } else {

            const imageResults = {
                file: '',
                src: '',
            };

            setImagesChanged(true);
            if (type === 'cover') setCoverImage({ ...imageResults });
            if (type === 'profile') setProfileImage({ ...imageResults });
        }
    };

    const handleSubmit = () => {
        onSubmit({ profileImage, coverImage, roundedProfile });
        setImagesChanged(false);
    }

    const handleUndoChanges = () => {
        setCoverImage({ file: '', src: coverImgSrc || '' });
        setProfileImage({ file: '', src: profileImgSrc || '' });
        setImagesChanged(false);
    }

    const coverButtons = (
        <div className='cover_buttons'>
            {coverImage.src &&
                <MiniButton
                    bsStyle='danger'
                    icon='times'
                    inverted
                    onClick={(event) => handleImageChange(event, 'cover')}
                />
            }
            <FileInput
                bsStyle='success'
                inputName='coverImage'
                inverted
                icon={coverImage.src ? 'pencil-alt' : 'plus'}
                onChange={(event) => handleImageChange(event, 'cover')}
            />
        </div>
    )

    const profileButtons = (
        <div className='profile_buttons'>
            <FileInput
                bsStyle='success'
                inputName='profileImage'
                inverted
                icon={profileImage.src ? 'pencil-alt' : 'plus'}
                onChange={(event) => handleImageChange(event, 'profile')}
            />
            {profileImage.src &&
                <React.Fragment>
                    <MiniButton
                        bsStyle='info'
                        icon={roundedProfile ? 'square' : 'circle'}
                        inverted
                        onClick={() => setRoundedProfile(!roundedProfile)}
                    />
                    <MiniButton
                        bsStyle='danger'
                        icon='times'
                        inverted
                        onClick={(event) => handleImageChange(event, 'profile')}
                    />
                </React.Fragment>
            }
        </div>
    );

    const saveButtons = (
        <div className='save_buttons'>
            <div className='save'>
                <span>Save</span>
                <MiniButton
                    bsStyle='info'
                    icon='save'
                    onClick={handleSubmit}
                />
            </div>

            <div className='cancel'>
                <span>Cancel</span>
                <MiniButton
                    bsStyle='danger'
                    icon='times'
                    onClick={handleUndoChanges}
                />
            </div>
        </div>
    );

    return (
        <div
            className='ImageUploader'
            {...rest}
        >
            <div className='cover'>
                {/* TODO: Placeholder for Hero image */}
                <Hero
                    altText={'Some image text'}
                    imgSrc={coverImage.src}
                >
                    <h1>{heading}</h1>
                </Hero>
                {coverButtons}
            </div>

            <div className='profile'>
                <ProfileImage
                    placeholder={null}
                    roundImage={roundedProfile}
                    src={profileImage.src}
                />
                {profileButtons}
            </div>

            {(!!onSubmit && imagesChanged) && saveButtons}
        </div>
    );
}

ImageUploader.propTypes = {
    /**
    * Handler for image upload submissions
    */
    onSubmit: PropTypes.func,
    /**
    * The heading/text to dislpay in the hero image, if available
    */
    heading: PropTypes.string,
    /**
    * The src attribute for the hero image, if available
    */
    coverImgSrc: PropTypes.string,
    /**
    * The src attribute for the profile image, if available
    */
    profileImgSrc: PropTypes.string,
};

ImageUploader.defaultProps = {};

export default ImageUploader;
