import { render, screen } from '@testing-library/react';

export const componentExists = (Component, props, selector, options = {}) => {
    let container;

    beforeEach(() => {
        ({ container } = render(<Component {...props} />));
    });

    it('should exist', () => {
        if (options.debug) {
            screen.debug();
        }
        expect(container.querySelector(selector)).toBeInTheDocument();
    });
}

export const canReceiveClass = (Component, props, selector, options = {}) => {
    let container;
    const className = 'some-class';

    beforeEach(() => {
        ({ container } = render(<Component {...props} className={className} />));
    });
    it('should be able to receive a className', () => {
        if (options.debug) {
            screen.debug();
        }
        expect(container.querySelector(selector)).toHaveClass(className);
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

export const runStandardComponentTests = (Component, props, selector, options = {}) => {
    describe('Standard component tests', () => {
        componentExists(Component, props, selector, options);
        canReceiveClass(Component, props, selector, options);
    });
};