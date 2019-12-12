import { shallow, mount } from 'enzyme';

const componentExists = (testElement, options) => {
    it('should exist', () => {
        const wrapper = shallow(testElement, options);
        expect(wrapper.exists()).toBe(true);
    });
}

const canReceiveClass = (testElement, options) => {
    it('should be able to receive a className', () => {
        const wrapper = mount(testElement, options);
        wrapper.setProps({ className: 'test_class' });

        expect(wrapper.hasClass('test_class')).toBe(true);
    });
}

export const runStandardComponentTests = (testElement, options) => {
    describe('Standard component tests', () => {
        componentExists(testElement, options);
        canReceiveClass(testElement, options);
    });
};