import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { ProfileImage } from '../src';

const defaultProps = {
    // props
};

const testElement = <ProfileImage {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProfileImage />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});