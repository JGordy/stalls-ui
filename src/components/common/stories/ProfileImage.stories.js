import React from 'react';
import { ProfileImage } from '../src';

const mockImage = 'https://homepages.cae.wisc.edu/~ece533/images/girl.png';

export default {
  title: 'Atoms/ProfileImage',

  parameters: {
    jest: ['ProfileImage.spec.js'],
    component: ProfileImage,
  },
};

export const defaultStory = () => <ProfileImage src={mockImage} />;

defaultStory.story = {
  name: 'default',
};

export const rounded = () => <ProfileImage roundImage={true} src={mockImage} />;

export const missingUrlFallback = () => <ProfileImage src={''} />;

missingUrlFallback.story = {
  name: 'missing url fallback',
};
