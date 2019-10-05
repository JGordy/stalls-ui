import {
    addDecorator,
    addParameters,
    configure,
} from '@storybook/react';

import { configureActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withTests } from '@storybook/addon-jest';
import results from '../jest-test-results.json';

import marketTheme from './generosity-market-theme.js';

configureActions({
    depth: 100,
    // Limit the number of items logged into the actions panel
    limit: 20,
});

addParameters({
    options: {
        theme: marketTheme,
    },
});

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
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
