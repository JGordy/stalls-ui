import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { ProgressBar } from '../src';

const defaultProps = {
    current: 0,
    goal: 100,
    bsStyle: 'success',
    label: 'Great Job!',
};

const wrapper = shallow(<ProgressBar {...defaultProps} />);

describe('<ProgressBar />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.ProgressBar')).toBe(true);
    });

    it.todo('should render a fill bar');

    it.todo('should render a label');

    it.todo('should calculate the percentage for the fill bar');
})