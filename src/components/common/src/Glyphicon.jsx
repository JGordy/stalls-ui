import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import 'config/fontawesome';

const Glyphicon = ({
    icon,
    onClick,
    size,
    style,
    ...rest
}) =>
    (
        <FontAwesomeIcon
            icon={icon}
            onClick={onClick}
            size={size}
            style={style}
            {...rest}
        />
    );

Glyphicon.propTypes = {
    /**
     * The font awesome icon to render
     */
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    /**
    * The function to call on click
    */
    onClick: PropTypes.func,
    /**
    *  Size of the icon
    */
    size: PropTypes.string,
    /**
    * The style object to apply to the icon
    */
    style: PropTypes.object,
};

Glyphicon.defaultProps = {};

export default Glyphicon;