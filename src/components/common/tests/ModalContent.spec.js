import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { ModalContent } from '../src';

const defaultProps = {
    // props
};

const testElement = <ModalContent {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ModalContent />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});