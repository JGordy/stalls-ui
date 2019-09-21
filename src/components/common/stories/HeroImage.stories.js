import React from 'react';
import { HeroImage } from '../src';

export default {
  title: 'Atoms/HeroImage',

  parameters: {
    jest: ['HeroImage.spec.js'],
    component: HeroImage,
  },
};

export const defaultStory = () => (
  <HeroImage
    imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000"
    altText="Yosemite National Park"
    overlayColor="rgba(0,0,0,0.5)"
  >
    Here's some text
  </HeroImage>
);

defaultStory.story = {
  name: 'Default',
};
