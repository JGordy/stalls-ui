import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

// Shared UI Components
import { LinkButton } from '../src';

const defaultProps = {
    icon: '',
    bsStyle: 'success',
    href: '/story',
    label: 'Submit',
};

const wrapper = mount(
    <BrowserRouter>
        <LinkButton {...defaultProps} />
    </BrowserRouter>
);

describe('<LinkButton />', () => {
    it('should render without crashing', () => {
        expect(wrapper.exists('a.LinkButton')).toEqual(true);
    });
});
