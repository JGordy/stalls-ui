import React from 'react';
import { render } from '@testing-library/react';
import { runStandardComponentTests, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import DownloadCSV from '../src/DownloadCSV';

const jsonData = [
    {
        name: 'Joe',
        email: 'j@j.com',
        amount: 5,
    },
    {
        name: 'Jim',
        email: 'jim@jim.com',
        amount: 10,
    },
    {
        name: 'Jeff',
        email: 'jeff@jeff.com',
        amount: 100,
    },
];

const defaultProps = {
    data: jsonData,
    filename: 'test file',
    label: 'Download File',
};

const testComponent = <DownloadCSV {...defaultProps} />;

describe('<DownloadCSV />', () => {

    let container;

    beforeEach(() => {
        ({ container } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    runStandardComponentTests(DownloadCSV, defaultProps, '.csv-download');

    it('should have text', () => {
        expect(container.querySelector('.csv-download')).toBeInTheDocument();
    })
})
