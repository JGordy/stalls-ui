import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

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

const testElement = <ProgressCircle {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProgressCircle />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});