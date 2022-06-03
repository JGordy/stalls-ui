import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';
import '../styles/Modal.css';

import { useModal } from '@jgordy24/react-hooks-lib';

const Modal = ({
    ariaLabel = 'modal',
    children,
    role = 'modal',
    triggerProps = {},
}) => {
    const buttonRef = useRef();
    const modalRef = useRef();

    const { isShowing, toggle } = useModal();

    const showModal = () => {
        toggle();
        if (modalRef && modalRef.current) {
            modalRef.current.focus(); // TODO: Why don't these work??
        }
    }

    const hideModal = () => {
        toggle();
        if (buttonRef && buttonRef.current) {
            buttonRef.current.focus(); // TODO: Why don't these work??
        }
    }

    // TODO: Change this to useKeyPressed hook
    const onKeyDown = ({ keyCode }) => keyCode === 27 && hideModal();

    const onClickAway = ({ target }) => {
        if (!modalRef) return;
        if (modalRef.current.className !== target.className) return;
        toggle();
    };

    return (
        <Fragment>
            <ModalTrigger
                onClick={showModal}
                buttonRef={buttonRef}
                {...triggerProps}
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

Modal.propTypes = {
    /**
    * Children to render in the modal content
    */
    children: PropTypes.node,
    /**
    * Text to render in the modal trigger button
    */
    triggerText: PropTypes.string,
};

Modal.defaultProps = {};

export default Modal;