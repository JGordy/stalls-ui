import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Shared UI Components
import { LinkButton } from '../src';

const defaultProps = {
    icon: '',
    bsStyle: 'success',
    href: '/story',
    label: 'Submit',
};

const testComponent = (
    <BrowserRouter>
        <LinkButton {...defaultProps} />
    </BrowserRouter>
);

describe('<LinkButton />', () => {
    let container;

    beforeEach(() => {
        ({ container } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    it('should render without crashing', () => {
        expect(container.querySelector('a.LinkButton')).toBeInTheDocument();
    });
});
