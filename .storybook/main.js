module.exports = {
    stories: [
        '../src/__stories__/0-Welcome.stories.js',
        '../src/components/**/*.stories.js'
    ],
    addons: [
        '@storybook/addon-jest',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        'storybook-addon-deps',
        // '@storybook/preset-create-react-app',
        {
            name: '@storybook/addon-docs',
            options: { configureJSX: true },
        },
    ],
    // presets: ['storybook-addon-deps/preset-explorer'],
};