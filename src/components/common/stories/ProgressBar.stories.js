import React from 'react';
// import { action } from '@storybook/addon-actions';
import { ProgressBar } from '../src';

export default {
    title: 'Atoms/ProgressBar',

    parameters: {
        jest: ['ProgressBar.spec.js'],
        component: ProgressBar,
    },
};

const getProps = (bsStyle) => ({
    current: Math.floor(Math.random() * 100),
    goal: 100,
    bsStyle,
    label: `bsStyle: ${bsStyle}`,
});

export const primary = () => (
    <React.Fragment>
        <ProgressBar {...getProps("success")} />
        <ProgressBar {...getProps("warning")} />
        <ProgressBar {...getProps("danger")} />
        <ProgressBar {...getProps("info")} />
    </React.Fragment>
);

primary.storyName = 'Primary w/';

export const withLabel = () => (
    <React.Fragment>
        <ProgressBar {...getProps('success')} label='Great Job!' />
    </React.Fragment>
);

withLabel.storyName = 'W/ Label';