import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
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

defaultInput.storyName = 'WIP: Default Text Input';

