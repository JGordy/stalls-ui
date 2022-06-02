import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import MiniButton from '../src/MiniButton';

const onClick = jest.fn();
const defaultProps = {
    icon: 'times',
    bsStyle: 'success',
    onClick,
};

const testComponent = <MiniButton {...defaultProps} />;

describe('<MiniButton />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    componentExists(MiniButton, defaultProps, '.btns');

    it('calls an onClick handler if passed in as a prop', async () => {
        const button = container.querySelector('.btns');

        const user = userEvent.setup();
        await user.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call the function if the button is disabled', async () => {
        onClick.mockClear();
        const disabledProps = {
            ...defaultProps,
            disabled: true,
        };
        const { container } = render(<MiniButton {...disabledProps} />);

        const button = container.querySelector('.btns');

        const user = userEvent.setup();
        await user.click(button);

        expect(onClick).toHaveBeenCalledTimes(0);
    })


    it.todo('Changes styling via bsStyle prop');

    it.todo('Renders an icon based on props');
});