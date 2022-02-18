import React from 'react';
// import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { LinkButton } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Atoms/LinkButton',

    parameters: {
        jest: ['LinkButton.spec.js'],
        component: LinkButton,
    },
};

const getStoryProps = (type, inverted = false) => ({
    label: type,
    bsStyle: type,
    inverted: inverted,
    // onClick: action(`${type} button clicked`),
    href: '/story'
});

export const wBsStyleExamples = () => (
    <React.Fragment>
        <BrowserRouter>
            <LinkButton {...getStoryProps('success')} />
            <LinkButton {...getStoryProps('warning')} />
            <LinkButton {...getStoryProps('danger')} />
            <LinkButton {...getStoryProps('info')} />
            <LinkButton {...getStoryProps('disabled')} disabled />
        </BrowserRouter>
    </React.Fragment>
);

wBsStyleExamples.storyName = 'W/ bsStyle examples';

export const wBsSizeExamples = () => (
    <React.Fragment>
        <BrowserRouter>
            <LinkButton {...getStoryProps('success')} label='bsSize: sm' bsSize='sm' />
            <LinkButton {...getStoryProps('success')} label='bsSize: md' bsSize='md' />
            <LinkButton {...getStoryProps('success')} label='bsSize: lg' bsSize='lg' />
            <LinkButton {...getStoryProps('success')} label='bsSize: full' bsSize='full' />
            <LinkButton {...getStoryProps('success')} label='bsSize: long' bsSize='long' />
        </BrowserRouter>
    </React.Fragment>
);

wBsSizeExamples.storyName = 'W/ bsSize examples';

export const wInvertedProp = () => (
    <React.Fragment>
        <BrowserRouter>
            <LinkButton {...getStoryProps('success', true)} />
            <LinkButton {...getStoryProps('warning', true)} />
            <LinkButton {...getStoryProps('danger', true)} />
            <LinkButton {...getStoryProps('info', true)} />
            <LinkButton {...getStoryProps('disabled', true)} disabled />
        </BrowserRouter>
    </React.Fragment>
);

wInvertedProp.storyName = 'w/ inverted prop';
