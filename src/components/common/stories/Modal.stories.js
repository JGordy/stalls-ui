import React from 'react';

// Components
import { MiniButton, Modal, ProfileImage } from '../src';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Molecules/Modal',

    parameters: {
        jest: ['Modal.spec.js'],
        component: Modal,
    },
};

const triggerProps = {
    label: 'Trigger Modal',
    bsStyle: 'md',
}

export const defaultWChildren = () => (
    <Modal triggerProps={triggerProps}>
        <ProfileImage
            src="https://homepages.cae.wisc.edu/~ece533/images/girl.png"
            round_image={true}
        />
        <MiniButton icon="plus" bsStyle="success" onClick={() => alert('Hey yooooooo!')} />
    </Modal>
);

defaultWChildren.storyName = 'default w/Children';

const iconTriggerProps = {
    ...triggerProps,
    label: 'Scan Code',
    iconOnly: true,
    icon: 'qrcode'
}

export const defaultWIconTrigger = () => (
    <Modal triggerProps={iconTriggerProps}>
        <ProfileImage
            src="https://homepages.cae.wisc.edu/~ece533/images/girl.png"
            round_image={true}
        />
        <MiniButton icon="plus" bsStyle="success" onClick={() => alert('Hey yooooooo!')} />
    </Modal>
);

defaultWIconTrigger.storyName = 'default w/Icon Trigger';
