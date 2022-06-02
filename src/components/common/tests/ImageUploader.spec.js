// import React from 'react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { ImageUploader } from '../src';

const defaultProps = {
    // props
};

// const testComponent = <ImageUploader {...defaultProps} />;

describe('<ImageUploader />', () => {

    checkConsoleWarnOrErrors();

    componentExists(ImageUploader, defaultProps, '.ImageUploader');

    it.todo('write quite a few more tests here...');
});