import React from 'react';
import { shallow } from 'enzyme';

// Component import
import MiniButton from '../src/MiniButton';

const defaultProps = {
    className: 'submit',
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

    it('does not call the function if the button is disabled', () => {
        defaultProps.onClick.mockClear();
        wrapper.setProps({ className: 'disabled' });
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
    })


    it.todo('Accepts style object prop');

    it.todo('Renders passed children');
});