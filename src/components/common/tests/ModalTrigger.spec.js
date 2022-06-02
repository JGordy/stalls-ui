// import React from 'react';
import { runStandardComponentTests, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { ModalTrigger } from '../src';

const defaultProps = {
    // props
};

// const testElement = <ModalTrigger {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ModalTrigger />', () => {

    checkConsoleWarnOrErrors();

    runStandardComponentTests(ModalTrigger, defaultProps, '.Button');

    it.todo('write quite a few more tests here...');
});