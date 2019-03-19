import React from "react";
import PropTypes from 'prop-types';

import "../styles/Button.css";

const Button = ({
    active,
    fill,
    label,
}) => (
        <div
            className={`Button ${
                active
                    ? fill
                        ? `active fill`
                        : `active no-fill`
                    : `disabled`
                }`}
        >
            {label}
        </div>
    );

Button.propTypes = {
    active: PropTypes.bool,
};

Button.defaultProps = {
    active: true,
};

export default Button;