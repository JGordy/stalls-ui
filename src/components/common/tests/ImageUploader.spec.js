import React from 'react';
// import { shallow } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';

// Component import
import { ImageUploader } from '../src';

const defaultProps = {
    // props
};

const testElement = <ImageUploader {...defaultProps} />;
// const wrapper = shallow(testElement);

describe('<ImageUploader />', () => {

    runStandardComponentTests(testElement);

    it.todo('write quite a few more tests here...');
});