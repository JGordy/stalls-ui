import React from 'react';

// Components
import { MiniButton, Modal, ProfileImage } from '../src';

export default {
  title: 'Molecules/Modal',

  parameters: {
    jest: ['Modal.spec.js'],
    component: Modal,
  },
};

export const defaultWChildren = () => (
  <Modal triggerText="Trigger modal">
    <ProfileImage
      mainImage="https://homepages.cae.wisc.edu/~ece533/images/girl.png"
      roundImage={true}
    />
    <MiniButton icon="plus" bsStyle="success" onClick={() => alert('Hey yooooooo!')} />
  </Modal>
);

defaultWChildren.story = {
  name: 'default w/Children',
};
