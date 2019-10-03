import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { ProgressCircle } from '../src';

const defaultProps = {
    // current: 0,
    // goal: 100,
    // bsStyle: 'success',
    // label: 'Great Job!',
};

const wrapper = shallow(<ProgressCircle {...defaultProps} />);

describe('<ProgressCircle />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.ProgressCircle')).toBe(true);
    });
});