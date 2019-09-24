import { create } from '@storybook/theming';

const primary = '#f0f0f0';
const secondary = '#4bb74d';
const white = '#ffffff';
const textGray = '#707070';
const blackish = '#1e301b';

export default create({
    base: 'light',

    colorPrimary: primary,
    colorSecondary: secondary,

    // UI
    appBg: white,
    appContentBg: white,
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: blackish,
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: textGray,
    barSelectedColor: secondary,
    barBg: primary,

    // Form colors
    inputBg: white,
    inputBorder: 'silver',
    inputTextColor: blackish,
    inputBorderRadius: 4,

    brandTitle: 'Stalls-UI (For Generosity Market)',
    brandUrl: 'https://example.com',
    brandImage: 'https://generosity-market-mail-assets.s3.amazonaws.com/Full-Color-Generosity-Logo-Text.png',
});
