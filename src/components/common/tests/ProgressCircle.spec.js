// import React from 'react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { ProgressCircle } from '../src';

const defaultProps = {
    current: 50,
    goal: 100,
    strokeColor: 'red',
    fillColor: 'white',
    sqSize: 100,
    rounded: true,
    // bsStyle: type,
    // inverted: inverted,
};

// const testElement = <ProgressCircle {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProgressCircle />', () => {

    checkConsoleWarnOrErrors();

    componentExists(ProgressCircle, defaultProps, '.ProgressCircle');

    it.todo('write quite a few more tests here...');
});