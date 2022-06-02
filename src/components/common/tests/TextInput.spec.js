// import React from 'react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { TextInput } from '../src';

const defaultProps = {
    type: 'text',
    label: 'Name',
    value: '',
    onChange: jest.fn(),
};

// const testComponent = <TextInput {...defaultProps} />;

describe('<TextInput />', () => {

    checkConsoleWarnOrErrors();

    componentExists(TextInput, defaultProps, '.simple-text-input');

    it.todo('write quite a few more tests here...');
});