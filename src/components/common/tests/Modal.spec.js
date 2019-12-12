import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { Modal } from '../src';

const defaultProps = {
    // props
};

const testElement = <Modal {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<Modal />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});