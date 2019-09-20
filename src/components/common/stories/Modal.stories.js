import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import {
    MiniButton,
    Modal,
    ProfileImage,
} from '../src';

storiesOf("Modal", module)
    .add('default w/Children', () => (
        <Modal
            triggerText='Trigger modal'
        >
            <ProfileImage
                mainImage='https://homepages.cae.wisc.edu/~ece533/images/girl.png'
                roundImage={true}
            />
            <MiniButton
                icon='plus'
                bsStyle='success'
                onClick={() => alert('Hey yooooooo!')}
            />
        </Modal>
    ))