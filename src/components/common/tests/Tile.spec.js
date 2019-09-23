import React from 'react';
import { shallow } from 'enzyme';

// Component import
import { Tile } from '../src';

const defaultProps = {
    icon: '',
    bsStyle: 'success',
    onClick: jest.fn(),
    children: '$5',
    disabled: false,
};

const wrapper = shallow(<Tile {...defaultProps} />);

describe('<Tile />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Tile')).toBe(true);
    });

    it('should render a label', () => {
        expect(wrapper.text()).toBe('$5');
    })

    it('should render an icon based on props', () => {
        wrapper.setProps({ icon: 'times' });
        expect(wrapper.find('.Tile').props().children[0].props.icon).toBe("times");
    });

    it('should call an onClick handler if passed in as a prop', () => {
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call the function if the button is disabled', () => {
        defaultProps.onClick.mockClear();
        wrapper.setProps({ disabled: true });
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
    });

    it.todo('Changes styling via bsStyle prop');
});