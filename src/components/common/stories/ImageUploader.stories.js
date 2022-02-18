import React from 'react';
import { action } from '@storybook/addon-actions';
import { ImageUploader } from '../src';
import { images } from '../../../__mocks__/story/images';

const { cover_image, profile_image } = images;

export default {
    title: 'Molecules/ImageUploader',

    parameters: {
        jest: ['ImageUploader.spec.js'],
        component: ImageUploader,
    },
};

export const defaultStory = () => {
    const props = {
        coverImgSrc: cover_image,
        profileImgSrc: profile_image,
        onSubmit: action('Image changes submitted'),
    };

    return <ImageUploader {...props} />;
};

defaultStory.storyName = 'Default';
