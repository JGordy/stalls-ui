import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ModalContent.css';

import { useLockBodyScroll } from '@jgordy24/react-hooks-lib';

const renderCloseButton = (buttonRef, hide) => (
    <button
        className="c-modal__close"
        aria-labelledby="close-modal"
        onClick={hide}
        ref={buttonRef}
    >
        <span id="close-modal" className="u-hide-visually">Close Modal</span>
        <svg
            className="c-modal__close-icon"
            viewBox="0 0 40 40"
        >
            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
        </svg>
    </button>
);

const ModalContent = ({
    ariaLabel,
    buttonRef,
    children,
    hide,
    modalRef,
    onClickAway,
    onKeyDown,
    role = 'dialog',
}) => {

    useLockBodyScroll();

    return ReactDOM.createPortal(
        <aside
            className="c-modal-cover"
            aria-modal="true"
            aria-label={ariaLabel}
            onClickAway={onClickAway}
            onKeyDown={onKeyDown}
            role={role}
            tabIndex="-1"
        >
            <div
                className="c-modal"
                ref={modalRef}
            >
                {renderCloseButton(buttonRef, hide)}
                <div className="c-modal__body">
                    {children}
                </div>
            </div>
        </aside>,
        document.body
    );
}

export default ModalContent;