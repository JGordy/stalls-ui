import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { FileInput } from '../src';

const defaultProps = {
    // props
};

const testElement = <FileInput {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<FileInput />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});