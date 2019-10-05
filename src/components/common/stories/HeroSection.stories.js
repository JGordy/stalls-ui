import React from 'react';
import { HeroSection } from '../src';
import { images } from '../../../__mocks__/story/images';

const { coverImage, profileImage } = images;

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
        coverImgSrc: coverImage,
        profileImgSrc: profileImage,
        children: <h1>Here's some sample text</h1>,
        overlayColor: 'rgba(0, 0, 0, 0.3)',
        roundedProfile: true,
    }

    return (
        <HeroSection {...defaultProps} />
    );
};

defaultStory.story = {
    name: 'Default with example images',
};