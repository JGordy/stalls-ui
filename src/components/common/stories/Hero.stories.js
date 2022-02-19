import React from 'react';
import { Hero } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Atoms/Hero',

    parameters: {
        jest: ['Hero.spec.js'],
        component: Hero,
    },
};

export const defaultStory = () => (
    <Hero
        imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000"
        altText="Yosemite National Park"
        overlayColor="rgba(0,0,0,0.5)"
    >
        <h1>Here's some sample text</h1>
    </Hero>
);

defaultStory.storyName = 'Default';
