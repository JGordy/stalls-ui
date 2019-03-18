import React from "react";
// import PropTypes from 'prop-types';

import "../../styles/Button.css";

const Button = props => (
    <div
        className={`Button ${
            props.active
                ? props.fill
                    ? `active fill`
                    : `active no-fill`
                : `disabled`
            }`}
    >
        {props.label}
    </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;