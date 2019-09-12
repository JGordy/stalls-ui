import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Button from '../src/Button';

const defaultProps = {
    icon: '',
    bsStyle: 'success',
    onClick: jest.fn(),
    label: 'Submit',
};

const wrapper = shallow(<Button {...defaultProps} />);

describe('<Button />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Button')).toBe(true);
    });

    it('should render a label', () => {
        expect(wrapper.text()).toBe('Submit');
    })

    it('should render an icon based on props', () => {
        wrapper.setProps({ icon: 'times' });
        expect(wrapper.find('.Button').props().children.props.children[0].props.icon).toBe("times");
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

    it.todo('should be an anchor element if href is present');

    it.todo('should navigate to href upon click');
});