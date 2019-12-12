import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { TextInput } from '../src';

const defaultProps = {
    type: 'text',
    label: 'Name',
    value: '',
    onChange: jest.fn(),
};

const testElement = <TextInput {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<TextInput />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});