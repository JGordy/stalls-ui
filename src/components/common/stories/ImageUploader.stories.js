import React from 'react';
import { ImageUploader } from '../src';

export default {
    title: 'Molecules/ImageUploader',

    parameters: {
        jest: ['ImageUploader.spec.js'],
        component: ImageUploader,
    },
};

export const defaultStory = () => {
    const props = {};

    return <ImageUploader {...props} />;
};

defaultStory.story = {
    name: 'Default',
};
