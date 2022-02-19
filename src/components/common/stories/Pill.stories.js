import React from 'react';
import { Pill } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Atoms/Pill',

    parameters: {
        jest: ['Pill.spec.js'],
        component: Pill,
    },
};

export const withEachBsStyleActive = () => (
    <React.Fragment>
        <div>
            <Pill label="default" bsStyle="default" />
            <Pill label="default + active" bsStyle="default" active />
        </div>
        <div>
            <Pill label="success" bsStyle="success" />
            <Pill label="success + active" bsStyle="success" active />
        </div>
        <div>
            <Pill label="warning" bsStyle="warning" />
            <Pill label="warning + active" bsStyle="warning" active />
        </div>
        <div>
            <Pill label="danger" bsStyle="danger" />
            <Pill label="danger + active" bsStyle="danger" active />
        </div>
        <div>
            <Pill label="info" bsStyle="info" />
            <Pill label="info + active" bsStyle="info" active />
        </div>
    </React.Fragment>
);

withEachBsStyleActive.storyName = 'With each bsStyle + active';
