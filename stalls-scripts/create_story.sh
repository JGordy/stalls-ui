COMPONENT=$1

COMPONENTPATH=$2$COMPONENT

echo "import React from 'react';
import { action } from '@storybook/addon-actions';
import { $COMPONENT } from '../src';

export default {
    title: 'Atoms/$COMPONENT',

    parameters: {
        jest: ['$COMPONENT.spec.js'],
        component: $COMPONENT,
    },
};

const storyProps = {
    // ...props
};

// or use this function for dynamic props
const getStoryProps = (options) => ({
    // ...props
});

export const default = () => (
    <React.Fragment>
        <$COMPONENT {...storyProps} />
    </React.Fragment>
);

default.story = {
    name: 'default'
};" > $COMPONENTPATH'.stories.js'

echo "\e[33m$COMPONENT stories created in location $COMPONENTPATH\e[0m"
