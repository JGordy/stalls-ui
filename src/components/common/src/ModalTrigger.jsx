import React from 'react';
import Button from './Button';
import '../styles/ModalTrigger.css';

const ModalTrigger = ({
    buttonRef,
    bsStyle = 'success',
    disabled = false,
    ...rest
}) => (
    <Button
        aria-label="Open Modal"
        bsStyle={bsStyle}
        buttonRef={buttonRef}
        disabled={disabled}
        {...rest}
    />
);

export default ModalTrigger;