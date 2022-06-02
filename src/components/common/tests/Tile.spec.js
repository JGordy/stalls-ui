import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { Tile } from '../src';

const defaultProps = {
    icon: 'times',
    bsStyle: 'success',
    onClick: jest.fn(),
    children: '$5',
    disabled: false,
};

const testComponent = <Tile {...defaultProps} />;

describe('<Tile />', () => {
    let container;
    let getAllByText;

    beforeEach(() => {
        ({
            container,
            getAllByText,
        } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    componentExists(Tile, defaultProps, '.Tile');

    it('should render a label', () => {
        expect(getAllByText('$5')[0]).toBeInTheDocument();
    })

    it('should render an icon based on props', () => {
        expect(container.querySelector('.svg-inline--fa.fa-xmark')).toBeInTheDocument();
    });

    it('should call an onClick handler if passed in as a prop', async () => {
        const tile = container.querySelector('.Tile');

        const user = userEvent.setup();
        await user.click(tile);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call the function if the button is disabled', async () => {
        defaultProps.onClick.mockClear();
        const disabledProps = {
            ...defaultProps,
            disabled: true,
        };
        const { container } = render(<Tile {...disabledProps} />);

        const submitButton = container.querySelector('.Tile');

        const user = userEvent.setup();
        await user.click(submitButton);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
    });

    it.todo('Changes styling via bsStyle prop');
});