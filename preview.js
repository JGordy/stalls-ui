import {
    addDecorator,
    addParameters,
} from '@storybook/react';

import { configureActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage } from 'storybook-addon-deps/blocks';

import { withTests } from '@storybook/addon-jest';
import results from '../src/jest-test-results.json';

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
        defaultViewport: 'iphonex',
    },
});

addParameters({
    docs: { page: DocsPage },
    dependencies: { withStoriesOnly: true, hideEmpty: true }
});

addDecorator(
    withTests({
        results,
    })
);
