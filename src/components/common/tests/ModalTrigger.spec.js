import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { ModalTrigger } from '../src';

const defaultProps = {
    // props
};

const testElement = <ModalTrigger {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ModalTrigger />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});