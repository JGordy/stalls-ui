import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileInput } from '../src';

// import results from '../../../../src/jest-test-results.json';
// import { withTests } from '@storybook/addon-jest';

const buttonProps = {
    bsStyle: 'success',
    icon: 'upload',
};

const inputProps = {
    classes: 'active another_class',
    inputName: 'profile',
    onChange: (event) => console.info("File", event.target.files),
    ...buttonProps
};

storiesOf('FileInput', module)
    // .addDecorator(withTests({ results }))
    // .addParameters({ jest: ['FileInput.spec.js'] })
    .add('Default', () => {
        return (
            <React.Fragment>
                <FileInput {...inputProps} />
                <p>Check out the dev console once you have selected a file!</p>
            </React.Fragment>
        );
    });