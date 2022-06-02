import React from 'react';
import Button from './Button';
import Glyphicon from './Glyphicon';
import '../styles/ModalTrigger.css';

const ModalTrigger = ({
    buttonRef,
    bsStyle = 'success',
    disabled = false,
    iconOnly,
    icon,
    label,
    ...rest
}) => {
    if (iconOnly) {
        return (
            <div className="trigger-glyph-container">
                <Glyphicon icon={icon} {...rest} />
                <span style={{ marginLeft: '5px' }}>{label}</span>
            </div>
        );
    };
    return (
        <Button
            aria-label="Open Modal"
            bsStyle={bsStyle}
            buttonRef={buttonRef}
            disabled={disabled}
            label={label}
            {...rest}
        />
    )
};

export default ModalTrigger;