import React from 'react';
import '../styles/ModalTrigger.css';

const ModalTrigger = ({
    buttonRef,
    show,
    text,
}) => (
        <button
            className="c-btn"
            aria-label="Open Modal"
            ref={buttonRef}
            onClick={show}
        >
            {text}
        </button>
    );

export default ModalTrigger;