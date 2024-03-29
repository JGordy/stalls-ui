import React from 'react';
import { Tile } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Atoms/Tile',

    parameters: {
        jest: ['Tile.spec.js'],
        component: Tile,
    },
};

export const asDefault = () => (
    <React.Fragment>
        <Tile bsStyle="success">
            $5
        </Tile>
    </React.Fragment>
);

asDefault.storyName = 'Default';