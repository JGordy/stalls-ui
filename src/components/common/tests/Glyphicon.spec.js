import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { Glyphicon } from '../src';

const defaultProps = {
    icon: 'times',
};

const testElement = <Glyphicon {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<Glyphicon />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});