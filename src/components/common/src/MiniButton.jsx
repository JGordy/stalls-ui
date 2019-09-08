import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';

import '../styles/MiniButton.css';

const MiniButton = ({
    bsStyle,
    className,
    disabled,
    icon,
    inverted,
    onClick,
    ...rest
}) => (
        <div
            className={
                `btns
                ${bsStyle}
                ${inverted ? 'inverted' : ''}
                ${disabled ? 'disabled' : ''}`
            }
            onClick={disabled ? (e) => onClick(e) : null}
            {...rest}
        >
            <Glyphicon icon={icon} />
        </div>
    );

MiniButton.propTypes = {
    /**
    * The class to pass to the root node
    */
    className: PropTypes.string,
    /**
    * On click handler
    */
    onClick: PropTypes.func,
    /**
    * The children for the component to render
    */
    children: PropTypes.node,
};

MiniButton.defaultProps = {
    // onClick: () => { },
};

export default MiniButton;