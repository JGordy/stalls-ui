import React from 'react';
import { action } from '@storybook/addon-actions';
import { MiniButton } from '../src';

const getStoryProps = type => ({
  bsStyle: type,
  onClick: action(`${type} button clicked`),
});

export default {
  title: 'Atoms/MiniButton',

  parameters: {
    jest: ['MiniButton.spec.js'],
    component: MiniButton,
  },
};

export const wBsStyleExamples = () => (
  <React.Fragment>
    <MiniButton icon="home" {...getStoryProps('success')} />
    <span>success</span>
    <MiniButton icon="plus" {...getStoryProps('warning')} />
    <span>warning</span>
    <MiniButton icon="times" {...getStoryProps('danger')} />
    <span>danger</span>
    <MiniButton icon="plus" {...getStoryProps('info')} />
    <span>info</span>
    <MiniButton icon="plus" disabled {...getStoryProps('default')} />
    <span>disabled</span>
  </React.Fragment>
);

wBsStyleExamples.story = {
  name: 'W/ bsStyle examples',
};

export const inverted = () => (
  <React.Fragment>
    <MiniButton icon="home" {...getStoryProps('success')} inverted />
    <span>success</span>
    <MiniButton icon="plus" {...getStoryProps('warning')} inverted />
    <span>warning</span>
    <MiniButton icon="times" {...getStoryProps('danger')} inverted />
    <span>danger</span>
    <MiniButton icon="plus" {...getStoryProps('info')} inverted />
    <span>info</span>
    <MiniButton icon="plus" {...getStoryProps('default')} disabled inverted />
    <span>disabled</span>
  </React.Fragment>
);

inverted.story = {
  name: 'Inverted',
};
