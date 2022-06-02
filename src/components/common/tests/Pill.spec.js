import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import Pill from '../src/Pill';
import Glyphicon from '../src/Glyphicon';

const onClick = jest.fn();
const defaultProps = {
    icon: 'times',
    bsStyle: 'success',
    onClick,
    label: 'Submit',
};

const testComponent = <Pill {...defaultProps} />;

describe('<Pill />', () => {

    let container;
    let getAllByText;

    beforeEach(() => {
        ({
            container,
            getAllByText,
        } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    componentExists(Pill, defaultProps, '.Pill');

    it('should render a label', () => {
        expect(getAllByText('Submit')[1]).toBeInTheDocument();
    })

    it('should render an icon based on props', () => {
        expect(container.querySelector('.svg-inline--fa.fa-xmark')).toBeInTheDocument();
    });

    it('should call an onClick handler if passed in as a prop', async () => {
        const submitButton = container.querySelector('.Pill');

        const user = userEvent.setup();
        await user.click(submitButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.todo('Changes styling via bsStyle prop');
});