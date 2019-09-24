import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src';

export default {
  title: 'Atoms/Button',

  parameters: {
    jest: ['Button.spec.js'],
    component: Button,
  },
};

const getStoryProps = (type, inverted = false) => ({
  label: type,
  bsStyle: type,
  inverted: inverted,
  onClick: action(`${type} button clicked`),
});

export const wBsStyleExamples = () => (
  <React.Fragment>
    <Button {...getStoryProps('success')} />
    <Button {...getStoryProps('warning')} />
    <Button {...getStoryProps('danger')} />
    <Button {...getStoryProps('info')} />
    <Button {...getStoryProps('disabled')} disabled />
  </React.Fragment>
);

wBsStyleExamples.story = {
  name: 'W/ bsStyle examples',
};

export const wInvertedProp = () => (
  <React.Fragment>
    <Button {...getStoryProps('success', true)} />
    <Button {...getStoryProps('warning', true)} />
    <Button {...getStoryProps('danger', true)} />
    <Button {...getStoryProps('info', true)} />
    <Button {...getStoryProps('disabled', true)} disabled />
  </React.Fragment>
);

wInvertedProp.story = {
  name: 'w/ inverted prop',
};

export const withIcon = () => <Button {...getStoryProps('share')} bsStyle="success" icon="share-alt" />;

withIcon.story = {
  name: 'with Icon',
};

export const withHref = () => <Button label="navigate" bsStyle="info" href="#" />;

withHref.story = {
  name: 'with href',
};
