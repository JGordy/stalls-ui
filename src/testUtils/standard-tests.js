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

export const checkConsoleWarnOrErrors = (hasAllowableConsole = false) => {
    // RUn this seperately for each block/describe/test if there are allowable errors
    let isConsoleWarningOrError;
    let hasReactWarningOrError;

    beforeEach(() => {
        isConsoleWarningOrError = false;
        hasReactWarningOrError = false;

        jest.spyOn(global.console, 'error').mockImplementation((...args) => {
            isConsoleWarningOrError = true;
            args.forEach((err) => {
                if (typeof err === 'string' && err.toLowerCase().includes('react')) {
                    hasReactWarningOrError = true;
                }
            })
            // Optional: jest spits out the error anyways
            console.log(...args);
        });

        jest.spyOn(global.console, 'warn').mockImplementation((...args) => {
            isConsoleWarningOrError = true;
            args.forEach((err) => {
                if (typeof err === 'string' && err.toLowerCase().includes('react')) {
                    hasReactWarningOrError = true;
                }
            })
            // Optional: jest spits out the error anyways
            console.log(...args);
        })
    });

    afterEach(() => {
        if (isConsoleWarningOrError && !hasAllowableConsole) {
            let errorMessage = 'Console warnings and errors are not allowed';
            if (hasReactWarningOrError) {
                errorMessage = 'React console warnings or errors are not allowed';
            }
            throw new Error(errorMessage);
        }
    });
}

export const runStandardComponentTests = (testElement, options) => {
    describe('Standard component tests', () => {
        componentExists(testElement, options);
        canReceiveClass(testElement, options);
    });
};