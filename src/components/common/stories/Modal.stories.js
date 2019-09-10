import React from 'react';
import { storiesOf } from "@storybook/react";
import Modal from "../src/Modal";

storiesOf("Modal", module)
    .add('default', () => (
        <Modal
            triggerText='Trigger modal'
        >
            Hey I'm a modal!!
        </Modal>
    ))