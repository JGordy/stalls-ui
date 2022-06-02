import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { runStandardComponentTests, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { Button } from '../src';

const onClick = jest.fn();
const defaultProps = {
    icon: 'times',
    bsStyle: 'success',
    onClick,
    label: 'Submit',
};

const testComponent = <Button {...defaultProps} />;

describe('<Button />', () => {

    let container;
    let getByText;

    beforeEach(() => {
        ({
            container,
            getByText,
        } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    runStandardComponentTests(Button, defaultProps, '.Button');

    it('should render a label', () => {
        expect(getByText('Submit')).toBeInTheDocument();
    })

    it('should render an icon based on props', () => {
        expect(container.querySelector('.svg-inline--fa.fa-xmark')).toBeInTheDocument();
    });

    it('should call an onClick handler if passed in as a prop', async () => {
        const submitButton = container.querySelector('.Button');

        const user = userEvent.setup();
        await user.click(submitButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call the function if the button is disabled', async () => {
        onClick.mockClear();
        const disabledProps = {
            ...defaultProps,
            disabled: true,
        };
        const { container } = render(<Button {...disabledProps} />);

        const submitButton = container.querySelector('.Button');

        const user = userEvent.setup();
        await user.click(submitButton);
        expect(onClick).toHaveBeenCalledTimes(0);
    });


    it.todo('Changes styling via bsStyle prop');

    it.todo('should be an anchor element if href is present');

    it.todo('should navigate to href upon click');
});