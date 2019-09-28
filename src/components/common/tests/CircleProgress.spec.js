import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { CircleProgress } from '../src';

const defaultProps = {
    // current: 0,
    // goal: 100,
    // bsStyle: 'success',
    // label: 'Great Job!',
};

const wrapper = shallow(<CircleProgress {...defaultProps} />);

describe('<CircleProgress />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.CircleProgress')).toBe(true);
    });
});