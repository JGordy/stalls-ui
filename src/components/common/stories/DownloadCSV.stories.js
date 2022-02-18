import React from 'react';
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

export default {
    title: 'Atoms/DownloadCSV',

    parameters: {
        jest: ['DownloadCSV.spec.js'],
        component: DownloadCSV,
    },
};

export const defaultStory = () => (
    <React.Fragment>
        <DownloadCSV
            label="Download File"
            className="download"
            data={jsonData}
            filename="Example Data"
        />
    </React.Fragment>
);

defaultStory.storyName = 'Default';
