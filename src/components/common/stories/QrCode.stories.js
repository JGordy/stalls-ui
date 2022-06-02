import React from 'react';
// import { action } from '@storybook/addon-actions';
import { QrCode } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Atoms/QrCode',

    parameters: {
        // jest: ['QrCode.spec.js'],
        component: QrCode,
    },
};

const getStoryProps = (type, inverted = false) => ({
    url: 'https://www.google.com',
});

export const basic = () => (
    <React.Fragment>
        <QrCode {...getStoryProps('')} />
    </React.Fragment>
);

basic.storyName = 'Default';

const withColorProps = {
    ...getStoryProps(''),
    colors: {
        dark: "#010599FF",
        light: "#FFBF60FF"
    }
}

export const withColors = () => (
    <React.Fragment>
        <QrCode {...withColorProps} />
    </React.Fragment>
);

withColors.storyName = 'WithColors';