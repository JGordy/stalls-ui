import React from 'react';
import { shallow } from 'enzyme';

// Component import
import Pill from '../src/Pill';
import Glyphicon from '../src/Glyphicon';

const defaultProps = {
    icon: '',
    bsStyle: 'success',
    onClick: jest.fn(),
    label: 'Submit',
};

const wrapper = shallow(<Pill {...defaultProps} />);

describe('<Pill />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Pill')).toBe(true);
    });

    it('should render a label', () => {
        expect(wrapper.text()).toBe('Submit');
    })

    it('should render an icon based on props', () => {
        wrapper.setProps({ icon: 'times' });
        expect(wrapper.find('.Pill').props().children[0]).toStrictEqual(<Glyphicon icon="times" />);
    });

    it('should call an onClick handler if passed in as a prop', () => {
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it.todo('Changes styling via bsStyle prop');
});