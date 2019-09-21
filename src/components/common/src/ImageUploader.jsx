import React from 'react';
import PropTypes from 'prop-types';

import {
    FileInput,
} from './index';

import '../styles/ImageUploader.css';

/**
 * `ImageUploader` allows a user to upload an image to your app
 */
const ImageUploader = ({
    onSubmit,
    ...rest
}) => {

    return (
        <React.Fragment>
            <div>Image Uploader placeholder</div>
            {/* TODO: Place to render uploaded photos || defaults */}

            {/* TODO: Trigger to upload photos in Modal? */}

            {/* TODO: Inputs to upload a file */}
        </React.Fragment>
    );
}

ImageUploader.propTypes = {
    /**
    * Handler for image upload submissions
    */
    onSubmit: PropTypes.func,
};

ImageUploader.defaultProps = {};

export default ImageUploader;
