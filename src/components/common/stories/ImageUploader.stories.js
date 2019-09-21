import React from 'react';
import { ImageUploader } from '../src';
import { images } from '../../../__mocks__/story/images';

const { coverImage, profileImage } = images;

export default {
    title: 'Molecules/ImageUploader',

    parameters: {
        jest: ['ImageUploader.spec.js'],
        component: ImageUploader,
    },
};

export const defaultStory = () => {
    const props = {
        coverImgSrc: coverImage,
        profileImgSrc: profileImage,
    };

    return <ImageUploader {...props} />;
};

defaultStory.story = {
    name: 'Default',
};
