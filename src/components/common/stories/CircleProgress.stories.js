import React from 'react';
// import { action } from '@storybook/addon-actions';
import { CircleProgress } from '../src';

export default {
    title: 'Atoms/CircleProgress',

    parameters: {
        jest: ['CircleProgress.spec.js'],
        component: CircleProgress,
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
    // onClick: action(`${type} button clicked`),
});

export const primary = () => (
    <React.Fragment>
        <CircleProgress {...getStoryProps('')} />
    </React.Fragment>
);

primary.story = {
    name: 'Primary',
};