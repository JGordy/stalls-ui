import React from 'react';
import { Button } from '../src';

export default {
  title: 'Atoms/Button',

  parameters: {
    jest: ['Button.spec.js'],
    component: Button,
  },
};

export const wBsStyleExamples = () => (
  <React.Fragment>
    <Button label="success" bsStyle="success" />
    <Button label="warning" bsStyle="warning" />
    <Button label="danger" bsStyle="danger" />
    <Button label="info" bsStyle="info" />
    <Button label="disabled" disabled />
  </React.Fragment>
);

wBsStyleExamples.story = {
  name: 'W/ bsStyle examples',
};

export const wInvertedProp = () => (
  <React.Fragment>
    <Button label="success" bsStyle="success" inverted />
    <Button label="warning" bsStyle="warning" inverted />
    <Button label="danger" bsStyle="danger" inverted />
    <Button label="info" bsStyle="info" inverted />
    <Button label="disabled" disabled inverted />
  </React.Fragment>
);

wInvertedProp.story = {
  name: 'w/ inverted prop',
};

export const withIcon = () => <Button label="share" icon="share-alt" bsStyle="success" />;

withIcon.story = {
  name: 'with Icon',
};

export const withHref = () => <Button label="navigate" bsStyle="info" href="#" />;

withHref.story = {
  name: 'with href',
};
