import React from 'react';
import { shallow } from 'enzyme';

// Component import
import MiniButton from '../src/MiniButton';

const defaultProps = {
    icon: 'times',
    bsStyle: 'success',
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
        wrapper.setProps({ disabled: true });
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
    })


    it.todo('Changes styling via bsStyle prop');

    it.todo('Renders an icon based on props');
});