// import React from 'react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { FileInput } from '../src';

const defaultProps = {
    // props
};

// const testComponent = <FileInput {...defaultProps} />;

describe('<FileInput />', () => {

    checkConsoleWarnOrErrors();

    componentExists(FileInput, defaultProps, '.FileInput');

    it.todo('write quite a few more tests here...');
});