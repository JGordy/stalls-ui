import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MiniButton.css';

const MiniButton = ({
    classname,
    onClick,
    children,
}) => (
        <div
            className={`btns success ${classname}`}
            onClick={(e) => onClick(e)}
        >
            {children}
        </div>
    );

MiniButton.propTypes = {
    /**
    * The class to pass to the root node
    */
    classname: PropTypes.string,
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