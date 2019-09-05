import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import '../styles/ProfileImage.css';

import 'config/fontawesome';

const ProfileImage = ({
    roundImage,
    mainImage,
    bgImage,
}) => (
        <div
            className="ProfileImage"
            style={{
                borderRadius: roundImage ? '50%' : '10%',
                backgroundImage: mainImage && `url(${mainImage})`,
                backgroundColor: bgImage ? '' : 'var(--white)',
                display: mainImage ? 'block' : 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            {!mainImage && <Glyphicon icon="camera" />}
        </div>
    );

ProfileImage.propTypes = {
    /**
    *   Boolean to render round or squircle shaped image
    */
    roundImage: PropTypes.bool,
    /**
    * The url of the image to render
    */
    mainImage: PropTypes.string,
    /**
    * TODO I honestly don't remember what this is used for...
    */
    bgImage: PropTypes.string,
};

ProfileImage.defaultProps = {};

export default ProfileImage;
