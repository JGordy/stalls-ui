import React from 'react';
import { MiniButton } from '../src';

const commonProps = type => ({
  bsStyle: type,
  onClick: () => alert(`${type} Button Clicked!`),
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
    <MiniButton icon="home" {...commonProps('success')} />
    <span>success</span>
    <MiniButton icon="plus" {...commonProps('warning')} />
    <span>warning</span>
    <MiniButton icon="times" {...commonProps('danger')} />
    <span>danger</span>
    <MiniButton icon="plus" {...commonProps('info')} />
    <span>info</span>
    <MiniButton icon="plus" disabled {...commonProps('default')} />
    <span>disabled</span>
  </React.Fragment>
);

wBsStyleExamples.story = {
  name: 'W/ bsStyle examples',
};

export const inverted = () => (
  <React.Fragment>
    <MiniButton icon="home" {...commonProps('success')} inverted />
    <span>success</span>
    <MiniButton icon="plus" {...commonProps('warning')} inverted />
    <span>warning</span>
    <MiniButton icon="times" {...commonProps('danger')} inverted />
    <span>danger</span>
    <MiniButton icon="plus" {...commonProps('info')} inverted />
    <span>info</span>
    <MiniButton icon="plus" {...commonProps('default')} disabled inverted />
    <span>disabled</span>
  </React.Fragment>
);

inverted.story = {
  name: 'Inverted',
};
