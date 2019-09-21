import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import '../styles/Pill.css';

const Pill = ({
    active,
    bsStyle,
    icon,
    label,
    onClick,
}) => {

    return (
        <div
            className={`Pill ${bsStyle} ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            {icon && <Glyphicon icon={icon} />}
            {label}
        </div>
    );
};

Pill.propTypes = {
    /**
    * The classname to apply to the root node
    */
    bsStyle: PropTypes.oneOf([
        'default',
        'success',
        'info',
        'warning',
        'danger',
        'active'
    ]),
    /**
    * The label (usually text) to render at the root nodes
    */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    /**
    * The Handler for action button click
    */
    onClick: PropTypes.func,
    /**
    * The name of the Font Awesome icon to pass to the FontAwesome component
    */
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
};

Pill.defaultProps = {
    bsStyle: 'default',
    label: '',
};

export default Pill;