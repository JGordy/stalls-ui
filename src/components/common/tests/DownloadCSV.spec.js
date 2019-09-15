import React from 'react';
import { shallow } from 'enzyme';

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

const wrapper = shallow(<DownloadCSV {...defaultProps} />);

describe('<DownloadCSV />', () => {

    it('should exist', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should have text', () => {
        console.log(wrapper.find('.csv-download').props().children.props);
        expect(wrapper.find('.csv-download').props().children[1]).toEqual('Download File');
    })
})
