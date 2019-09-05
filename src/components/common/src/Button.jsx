import React from "react";
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';

import "../styles/Button.css";

const Button = ({
    disabled,
    fill,
    icon,
    label,
}) => (
        <div
            className={`Button ${
                disabled
                    ? `disabled`
                    : fill
                        ? `fill`
                        : `no-fill`
                }`}
        >
            {icon && <Glyphicon icon={icon} />}
            {label}
        </div>
    );

Button.propTypes = {
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;