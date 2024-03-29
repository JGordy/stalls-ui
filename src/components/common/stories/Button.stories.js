import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
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

wBsStyleExamples.storyName = 'W/ bsStyle examples';

export const wBsSizeExamples = () => (
    <React.Fragment>
        <Button {...getStoryProps('success')} label='bsSize: sm' bsSize='sm' />
        <Button {...getStoryProps('success')} label='bsSize: md' bsSize='md' />
        <Button {...getStoryProps('success')} label='bsSize: lg' bsSize='lg' />
        <Button {...getStoryProps('success')} label='bsSize: full' bsSize='full' />
        <Button {...getStoryProps('success')} label='bsSize: long' bsSize='long' />
    </React.Fragment>
);

wBsSizeExamples.storyName = 'W/ bsSize examples';

export const wInvertedProp = () => (
    <React.Fragment>
        <Button {...getStoryProps('success', true)} />
        <Button {...getStoryProps('warning', true)} />
        <Button {...getStoryProps('danger', true)} />
        <Button {...getStoryProps('info', true)} />
        <Button {...getStoryProps('disabled', true)} disabled />
    </React.Fragment>
);

wInvertedProp.storyName = 'w/ inverted prop';

export const withIcon = () => <Button {...getStoryProps('share')} bsStyle="success" icon="share-alt" />;

withIcon.storyName = 'with Icon';

export const withHref = () => <Button label="navigate" bsStyle="info" href="https://localhost:9001/?path=/story/atoms-button--with-href" />;

withHref.storyName = 'with href';
