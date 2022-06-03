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
    onClick,
    style,
    ...rest
}) => {
    if (iconOnly) {
        return (
            <div className="trigger-glyph-container" onClick={onClick} style={style}>
                <Glyphicon icon={icon} {...rest} />
                {label && (
                    <span style={{ marginLeft: '5px' }}>{label}</span>
                )}
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
            onClick={onClick}
            style={style}
            {...rest}
        />
    )
};

export default ModalTrigger;