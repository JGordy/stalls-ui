import React from 'react';
// import { action } from '@storybook/addon-actions';
import { ProgressCircle } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Atoms/ProgressCircle',

    parameters: {
        jest: ['ProgressCircle.spec.js'],
        component: ProgressCircle,
    },
};

const getStoryProps = (type, inverted = false) => ({
    current: Math.floor(Math.random() * 100),
    goal: 100,
    strokeColor: 'red',
    fillColor: 'white',
    sqSize: 100,
    rounded: true,
    // bsStyle: type,
    // inverted: inverted,
});

export const primary = () => (
    <React.Fragment>
        <ProgressCircle {...getStoryProps('')} />
    </React.Fragment>
);

primary.storyName = 'Primary';

const secondaryProps = {
    ...getStoryProps(''),
    fillColor: 'red',
    strokeColor: 'white',
    rounded: false,
}

export const secondary = () => (
    <React.Fragment>
        <ProgressCircle {...secondaryProps} />
    </React.Fragment>
);

secondary.storyName = 'Secondary';