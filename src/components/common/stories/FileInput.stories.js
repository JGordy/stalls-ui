import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileInput } from '../src';

storiesOf('FileInput', module)
    .addParameters({ jest: ['FileInput.spec.js'] })
    .add('Default', () => {

        const buttonProps = {
            bsStyle: 'success',
            icon: 'upload',
        };

        const inputProps = {
            classes: 'active another_class',
            inputName: 'profile',
            onChange: (event) => console.info("File", event.target.files),
        };

        return (
            <React.Fragment>
                <FileInput
                    {...inputProps}
                    {...buttonProps}
                />
                <p>Check out the dev console once you have selected a file!</p>
            </React.Fragment>
        );
    });