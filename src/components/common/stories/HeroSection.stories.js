import React from 'react';
import { HeroSection } from '../src';
import { images } from '../../../__mocks__/story/images';

const { cover_image, profile_image } = images;

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Molecules/HeroSection',

    parameters: {
        jest: ['HeroSection.spec.js'],
        component: HeroSection,
    },
};



export const defaultStory = () => {
    const defaultProps = {
        coverAltText: 'Some image text',
        coverImgSrc: cover_image,
        profileImgSrc: profile_image,
        children: <h1>Here's some sample text</h1>,
        overlayColor: 'rgba(0, 0, 0, 0.3)',
        roundedProfile: true,
    }

    return (
        <HeroSection {...defaultProps} />
    );
};

defaultStory.storyName = 'Default with example images';