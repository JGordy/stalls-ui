// import React from 'react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { ProgressBar } from '../src';

const defaultProps = {
    current: 0,
    goal: 100,
    bsStyle: 'success',
    label: 'Great Job!',
};

// const testElement = <ProgressBar {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProgressBar />', () => {

    checkConsoleWarnOrErrors();

    componentExists(ProgressBar, defaultProps, '.ProgressBar');

    it.todo('should render a fill bar');

    it.todo('should render a label');

    it.todo('should calculate the percentage for the fill bar');
})