import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import '../styles/ProfileImage.css';

const ProfileImage = ({
    round_image,
    src,
    placeholder,
}) => (
        <div
            className="ProfileImage"
            style={{
                borderRadius: round_image ? '50%' : '10%',
                backgroundImage: src && `url(${src})`,
                backgroundColor: placeholder ? '' : 'white',
                display: src ? 'block' : 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            {!src && <Glyphicon icon="camera" />}
        </div>
    );

ProfileImage.propTypes = {
    /**
    *   Boolean to render round or squircle shaped image
    */
    round_image: PropTypes.bool,
    /**
    * The url source of the image to render
    */
    src: PropTypes.string,
    /**
    * Source for a placeholder image, if needed...
    */
    placeholder: PropTypes.string,
};

ProfileImage.defaultProps = {};

export default ProfileImage;
