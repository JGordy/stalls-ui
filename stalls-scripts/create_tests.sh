COMPONENT=$1

COMPONENTPATH=$2$COMPONENT

echo "import React from 'react';
import { shallow } from 'enzyme';

// Shared UI Components
import { $COMPONENT } from '../src';

const defaultProps = {
    // ...props
};

const wrapper = shallow(<$COMPONENT {...defaultProps} />);

describe('<$COMPONENT />', () => {
    it('should render without crashing', () => {
        expect(wrapper.exists('.$COMPONENT')).toEqual(true);
    });
});" > $COMPONENTPATH'.spec.js'

echo "\e[33m$COMPONENT tests created in location $COMPONENTPATH\e[0m"
