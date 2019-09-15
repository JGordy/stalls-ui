import React from "react";
import { storiesOf } from "@storybook/react";
import DownloadCSV from "../src/DownloadCSV";

import results from '../../../../src/jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

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

storiesOf("DownloadCSV", module)
    .addDecorator(withTests({ results }))
    .addParameters({ jest: ['DownloadCSV.spec.js'] })
    .add('Default', () => (
        <React.Fragment>
            <DownloadCSV
                label='Download File'
                className="download"
                data={jsonData}
                filename='Example Data'
            />
        </React.Fragment>
    ))