import {
    addDecorator,
    addParameters,
} from '@storybook/react';

import { addons } from '@storybook/addons';

import { configureActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withTests } from '@storybook/addon-jest';
import results from '../src/jest-test-results.json';

import marketTheme from './generosity-market-theme.js';

configureActions({
    depth: 100,
    // Limit the number of items logged into the actions panel
    limit: 20,
});

addons.setConfig({
    theme: marketTheme,
});

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphonex',
    },
});

addDecorator(
    withTests({
        results,
    })
);
