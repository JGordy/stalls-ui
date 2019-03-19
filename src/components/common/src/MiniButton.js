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
    classname: PropTypes.string,
    onClick: PropTypes.func
};

export default MiniButton;