// import React from 'react';
import { runStandardComponentTests, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { Glyphicon } from '../src';

const defaultProps = {
    icon: 'times',
};

// const testComponent = <Glyphicon {...defaultProps} />;

describe('<Glyphicon />', () => {

    checkConsoleWarnOrErrors();

    runStandardComponentTests(Glyphicon, defaultProps, '.svg-inline--fa.fa-xmark');

    it.todo('write quite a few more tests here...');
});