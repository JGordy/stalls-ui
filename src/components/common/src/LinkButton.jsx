import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Glyphicon from './Glyphicon';
import '../styles/LinkButton.css';

const LinkButton = ({
    bsStyle,
    bsSize,
    buttonRef,
    linkContext,
    disabled,
    href,
    icon,
    inverted,
    label,
    transparent,
    ...rest
}) => {
    const btnClass = classnames(
        'LinkButton',
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
        ref: buttonRef,
        ...rest
    }

    const children = (
        <React.Fragment>
            {icon && <Glyphicon icon={icon} />}
            {label}
        </React.Fragment>
    );

    const isExternalLink = href.includes('https://');
    if (isExternalLink) {
        return (
            <a
                href={href}
                target='_blank'
                rel='nofollow noopener noreferrer'
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
};

LinkButton.propTypes = {
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

LinkButton.defaultProps = {
    bsSize: 'lg',
    transparent: false,
    disabled: false,
    inverted: false,
};

export default LinkButton;
