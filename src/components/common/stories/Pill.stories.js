import React from 'react';
import { storiesOf } from "@storybook/react";
import Pill from "../src/Pill";

import results from '../../../../src/jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

storiesOf("Pill", module)
    .addDecorator(withTests({ results }))
    // .addParameters({ jest: ['Pill.spec.js']})
    .add('With each bsStyle + active', () => (
        <React.Fragment>
            <div>
                <Pill label='default' bsStyle='default' />
                <Pill label='default + active' bsStyle='default' active />
            </div>
            <div>
                <Pill label='success' bsStyle='success' />
                <Pill label='success + active' bsStyle='success' active />
            </div>
            <div>
                <Pill label='warning' bsStyle='warning' />
                <Pill label='warning + active' bsStyle='warning' active />
            </div>
            <div>
                <Pill label='danger' bsStyle='danger' />
                <Pill label='danger + active' bsStyle='danger' active />
            </div>
            <div>
                <Pill label='info' bsStyle='info' />
                <Pill label='info + active' bsStyle='info' active />
            </div>
        </React.Fragment>
    ));