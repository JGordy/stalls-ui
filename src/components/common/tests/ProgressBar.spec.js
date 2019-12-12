import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { ProgressBar } from '../src';

const defaultProps = {
    current: 0,
    goal: 100,
    bsStyle: 'success',
    label: 'Great Job!',
};

const testElement = <ProgressBar {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProgressBar />', () => {

    runStandardComponentTests(testElement);

    it.todo('should render a fill bar');

    it.todo('should render a label');

    it.todo('should calculate the percentage for the fill bar');
})