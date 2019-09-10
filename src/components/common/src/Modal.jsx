import React, { Fragment, useRef } from 'react';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';
import '../styles/Modal.css';

import { useModal } from '@jgordy24/react-hooks-lib';

const Modal = ({
    ariaLabel,
    children,
    role,
    triggerText,
}) => {
    const buttonRef = useRef();
    const modalRef = useRef();

    const { isShowing, toggle } = useModal();

    const showModal = () => {
        toggle();
        modalRef.current.focus();
    }

    const hideModal = () => {
        toggle();
        buttonRef.current.focus();
    }

    const onKeyDown = ({ keyCode }) => keyCode === 27 && hideModal();

    const onClickAway = (e) => {
        console.warn(modalRef);
        console.warn(modalRef && modalRef.current.contains(e.target));

        if (modalRef && modalRef.current.contains(e.target)) return; // Does this work??
        toggle();
    };

    return (
        <Fragment>
            <ModalTrigger
                text={triggerText}
                show={showModal}
                buttonRef={buttonRef}
            />
            {isShowing &&
                <ModalContent
                    ariaLabel={ariaLabel}
                    buttonRef={buttonRef}
                    hide={hideModal}
                    modalRef={modalRef}
                    onClickAway={onClickAway}
                    onKeyDown={onKeyDown}
                    role={role}
                >
                    {children}
                </ModalContent>
            }
        </Fragment>
    );
}

export default Modal;