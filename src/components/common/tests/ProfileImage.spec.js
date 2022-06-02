// import React from 'react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';

// Component import
import { ProfileImage } from '../src';

const defaultProps = {
    // props
};

// const testElement = <ProfileImage {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ProfileImage />', () => {

    checkConsoleWarnOrErrors();

    componentExists(ProfileImage, defaultProps, '.ProfileImage');

    it.todo('write quite a few more tests here...');
});