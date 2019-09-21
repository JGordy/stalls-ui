import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import '../styles/ProfileImage.css';

const ProfileImage = ({
    roundImage,
    src,
    placeholder,
}) => (
        <div
            className="ProfileImage"
            style={{
                borderRadius: roundImage ? '50%' : '10%',
                backgroundImage: src && `url(${src})`,
                backgroundColor: placeholder ? '' : 'var(--white)',
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
    roundImage: PropTypes.bool,
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
