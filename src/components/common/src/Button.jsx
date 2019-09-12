import React from "react";
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import { Link } from 'react-router-dom';

import "../styles/Button.css";

const Button = ({
    bsStyle,
    buttonRef,
    linkContext,
    disabled,
    href,
    icon,
    inverted,
    label,
    onClick,
    ...rest
}) => {

    const buttonProps = {
        className: `Button
                ${bsStyle}
                ${inverted ? 'inverted' : ''}
                ${disabled ? 'disabled' : ''}`,
        onClick: !disabled && onClick ? onClick : undefined,
        ref: buttonRef,
        ...rest
    }

    const children = (
        <React.Fragment>
            {icon && <Glyphicon icon={icon} />}
            {label}
        </React.Fragment>
    );

    if (href) {
        const isExternalLink = (href) => href.includes('https://');
        if (isExternalLink) {
            return (
                <a
                    href={href}
                    target={'_blank'}
                    rel={'nofollow noopener noreferrer'}
                    {...buttonProps}
                >
                    {children}
                </a>
            );
        } else {
            return (
                <Link
                    to={{
                        pathname: href,
                        state: { linkContext }
                    }}
                    {...buttonProps}
                >
                    {children}
                </Link>
            );
        }
    }

    return (
        <button {...buttonProps}>
            {children}
        </button>
    )
};

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