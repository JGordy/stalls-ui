import React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageUploader } from '../src';

storiesOf('ImageUploader', module)
    .addParameters({ jest: ['ImageUploader.spec.js'] })
    .addParameters({ component: ImageUploader })
    .add('Default', () => {
        const props = {};

        return (
            <ImageUploader {...props} />
        );
    });