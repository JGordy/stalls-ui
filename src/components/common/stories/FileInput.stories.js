import React from 'react';
import { action } from '@storybook/addon-actions';
import { FileInput } from '../src';

export default {
    title: 'Atoms/FileInput',

    parameters: {
        jest: ['FileInput.spec.js'],
        component: FileInput,
    },
};

export const defaultStory = () => {
    const buttonProps = {
        bsStyle: 'success',
        icon: 'upload',
    };

    const inputProps = {
        classes: 'active another_class',
        inputName: 'profile',
        onChange: action('File Uploaded'),
    };

    return (
        <React.Fragment>
            <FileInput {...inputProps} {...buttonProps} />
            <p>Check out the action tab once you have selected a file!</p>
        </React.Fragment>
    );
};

defaultStory.story = {
    name: 'Default',
};
