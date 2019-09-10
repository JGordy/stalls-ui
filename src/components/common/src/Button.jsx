import React from "react";
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';

import "../styles/Button.css";

const Button = ({
    bsStyle,
    buttonRef,
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
            onClick={disabled ? null : (e) => onClick(e)}
            ref={buttonRef}
            {...rest}
        >
            {icon && <Glyphicon icon={icon} />}
            {label}
        </div>
    );

Button.propTypes = {
    /**
    * The style name to apply to the button
    */
    bsStyle: PropTypes.oneOf([
        'success',
        'warning',
        'danger',
        'info',
    ]),
    /**
    * Is the button disabled?
    */
    disabled: PropTypes.bool,
    /**
    * On click handler
    */
    onClick: PropTypes.func,
    /**
    * The icon name for the Glyphicon component
    */
    icon: PropTypes.string,
    /**
    * Boolean to render an inverted color scheme
    */
    inverted: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
    inverted: false,
};

export default Button;