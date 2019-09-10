import React from 'react';
import Button from './Button';
import '../styles/ModalTrigger.css';

const ModalTrigger = ({
    buttonRef,
    show,
    text,
}) => (
        <Button
            aria-label="Open Modal"
            bsStyle="success"
            buttonRef={buttonRef}
            onClick={show}
            label={text}
        />
    );

export default ModalTrigger;