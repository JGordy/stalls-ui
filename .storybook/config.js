import {
    addDecorator,
    addParameters,
    configure,
} from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import results from '../jest-test-results.json';

import marketTheme from './generosity-market-theme.js';

addParameters({
    options: {
        theme: marketTheme,
    },
});

addDecorator(
    withTests({
        results,
    })
);

const loaderFn = () => {
    const allExports = [require('../src/__stories__/0-Welcome.stories.js')];
    const req = require.context('../src/components', true, /\.stories\.js$/);

    req.keys().forEach(fname => allExports.push(req(fname)));

    return allExports;
};

configure(loaderFn, module);
