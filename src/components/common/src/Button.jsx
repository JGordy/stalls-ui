import React from "react";
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';

import "../styles/Button.css";

const Button = ({
    bsStyle,
    disabled,
    icon,
    inverted,
    label,
    onClick,
    ...rest
}) => (
        <div
            className={
                `Button
                ${bsStyle}
                ${inverted ? 'inverted' : ''}
                ${disabled ? 'disabled' : ''}`
            }
            onClick={disabled ? (e) => onClick(e) : null}
            {...rest}
        >
            {icon && <Glyphicon icon={icon} />}
            {label}
        </div>
    );

Button.propTypes = {
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;