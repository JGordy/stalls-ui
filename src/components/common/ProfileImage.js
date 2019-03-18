import React from 'react';
// import PropTypes from 'prop-types';
// import FontAwesome from '../FontAwesome/FontAwesome';
import './styles/ProfileImage.css';

const ProfileImage = ({
    roundImage,
    mainImage,
    BGimage
}) => (
        <div
            className="ProfileImage"
            style={{
                borderRadius: roundImage ? '50%' : '10%',
                backgroundImage: mainImage && `url(${mainImage})`,
                backgroundColor: BGimage ? '' : 'var(--white)',
                display: mainImage ? 'block' : 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            {/* !mainImage && <FontAwesome icon="camera" /> */}
        </div>
    );

ProfileImage.propTypes = {};

ProfileImage.defaultProps = {};

export default ProfileImage;
