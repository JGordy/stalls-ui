import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MiniButton.css';

const MiniButton = ({
    className,
    onClick,
    children,
}) => (
        <div
            className={`btns ${className}`}
            onClick={className !== 'disabled' ? (e) => onClick(e) : null}
        >
            {children}
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