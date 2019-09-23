import React from 'react';
import { Tile } from '../src';

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

asDefault.story = {
    name: 'Default',
}