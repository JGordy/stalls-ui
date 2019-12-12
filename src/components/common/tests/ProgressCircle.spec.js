import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { ProgressCircle } from '../src';

const defaultProps = {
    // current: 0,
    // goal: 100,
    // bsStyle: 'success',
    // label: 'Great Job!',
};

const testElement = <ProgressCircle {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProgressCircle />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});