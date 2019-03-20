import React from 'react';
import { shallow } from 'enzyme';

// Component import
import MiniButton from '../src/MiniButton.js';

const defaultProps = {
    classname: 'submit',
    style: {
        color: 'white'
    },
    onClick: jest.fn(),
};

const wrapper = shallow(<MiniButton {...defaultProps} />);

describe('<MiniButton />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.btns')).toBe(true);
    });

    it('calls an onClick handler if passed in as a prop', () => {
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });
});