import React from 'react';
import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import MiniButton from '../src/MiniButton';

const defaultProps = {
    icon: 'times',
    bsStyle: 'success',
    onClick: jest.fn(),
};

const testElement = <MiniButton {...defaultProps} />;
const wrapper = shallow(testElement);

describe('<MiniButton />', () => {

    runStandardComponentTests(testElement);

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