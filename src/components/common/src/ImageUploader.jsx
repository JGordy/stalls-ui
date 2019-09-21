import React, { useState } from 'react';
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
    heading,
    profileImgSrc,
    onSubmit,
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
    const [roundedProfile, setRoundedProfile] = useState(true);

    const handleImageChange = (event, type) => {
        event.preventDefault();
        if (event && event.target.files) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                const imageResults = {
                    file: file,
                    src: reader.result
                };

                if (type === 'cover') setCoverImage({ ...imageResults });
                if (type === 'profile') setProfileImage({ ...imageResults });
            };
            reader.readAsDataURL(file);
        } else {

            const imageResults = {
                file: null,
                src: null
            };

            if (type === 'cover') setCoverImage({ ...imageResults });
            if (type === 'profile') setProfileImage({ ...imageResults });
        }
    };
    // const handleUpdateState = () => { };

    const renderCoverButtons = () => (
        <div className='cover_buttons'>
            {coverImage.src &&
                <MiniButton
                    bsStyle='danger'
                    icon='times'
                    onClick={(event) => handleImageChange(event, 'cover')}
                />
            }
            <FileInput
                bsStyle='success'
                inputName='coverImage'
                icon={coverImage.src ? 'pencil-alt' : 'plus'}
                onChange={(event) => handleImageChange(event, 'cover')}
            />
        </div>
    )

    const renderProfileButtons = () => (
        <div className='profile_buttons'>
            <FileInput
                bsStyle='success'
                inputName='profileImage'
                icon={profileImage.src ? 'pencil-alt' : 'plus'}
                onChange={(event) => handleImageChange(event, 'profile')}
            />
            {profileImage.src &&
                <React.Fragment>
                    <MiniButton
                        bsStyle='info'
                        icon={roundedProfile ? 'square' : 'circle'}
                        onClick={() => setRoundedProfile(!roundedProfile)}
                    />
                    <MiniButton
                        bsStyle='danger'
                        icon='times'
                        onClick={(event) => handleImageChange(event, 'profile')}
                    />
                </React.Fragment>
            }
        </div>
    );

    return (
        <div className='ImageUploader'>
            <div className='cover'>
                {/* TODO: How to do submitting??? */}
                {/* TODO: Placeholder for Hero image */}
                <Hero
                    altText={'Some image text'}
                    imgSrc={coverImage.src}
                    overlayColor={'rgba(0, 0, 0, 0.2)'}
                >
                    <h1>{heading}</h1>
                </Hero>
                {renderCoverButtons()}
            </div>

            <div className='profile'>
                <ProfileImage
                    placeholder={null}
                    roundImage={roundedProfile}
                    src={profileImage.src}
                />
                {renderProfileButtons()}
            </div>

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
