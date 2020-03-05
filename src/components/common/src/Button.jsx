import React from "react";
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import classnames from 'classnames';

import "../styles/Button.css";

const Button = ({
    bsStyle,
    bsSize,
    buttonRef,
    disabled,
    icon,
    inverted,
    label,
    onClick,
    transparent,
    ...rest
}) => {
    const btnClass = classnames(
        'Button',
        bsStyle,
        bsSize,
        {
            inverted,
            disabled,
            transparent,
        }
    );

    const buttonProps = {
        className: btnClass,
        onClick: !disabled && onClick ? onClick : undefined,
        ref: buttonRef,
        ...rest
    }

    return (
        <button {...buttonProps}>
            {icon && <Glyphicon icon={icon} />}
            {label}
        </button>
    )
};

Button.propTypes = {
    /**
    * The style name to apply to the button
    */
    bsStyle: PropTypes.oneOf([
        'active',
        'success',
        'warning',
        'danger',
        'info',
        'pale',
    ]),
    /**
    * The size name to apply to the button
    */
    bsSize: PropTypes.oneOf([
        'sm',
        'md',
        'lg',
        'full',
        'long',
    ]),
    /**
    * Is the button disabled?
    */
    disabled: PropTypes.bool,
    /**
    * The text to render in the root component
    */
    label: PropTypes.string,
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
    bsSize: 'lg',
    transparent: false,
    disabled: false,
    inverted: false,
};

export default Button;