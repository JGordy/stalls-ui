import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput } from '../src';

export default {
    title: 'Forms/TextInput',

    parameters: {
        jest: ['TextInput.spec.js'],
        component: TextInput,
    },
};

const inputProps = {
    label: 'Name',
    type: 'text',
    value: '',
    onChange: action('Text input value changed'),
};

export const defaultInput = () => (
    <React.Fragment>
        <TextInput {...inputProps} />
    </React.Fragment>
);

defaultInput.story = {
    name: 'WIP: Default Text Input'
};

