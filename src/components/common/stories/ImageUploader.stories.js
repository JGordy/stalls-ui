import React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageUploader } from '../src';

storiesOf('FileInput', module)
    .addParameters({ jest: ['ImageUploader.spec.js'] })