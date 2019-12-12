import React from 'react';
import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

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

const testElement = <DownloadCSV {...defaultProps} />;
const wrapper = shallow(testElement);

describe('<DownloadCSV />', () => {

    runStandardComponentTests(testElement);

    it('should have text', () => {
        // console.log(wrapper.find('.csv-download').props().children.props);
        expect(wrapper.find('.csv-download').props().children[1]).toEqual('Download File');
    })
})
