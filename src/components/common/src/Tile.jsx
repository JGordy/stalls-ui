import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import classnames from 'classnames';

import "../styles/Tile.css";

const Tile = ({
    bsStyle,
    children,
    classes,
    disabled,
    icon,
    onClick,
    ...rest
}) => {
    const tileClass = classnames('Tile', classes, bsStyle, { disabled });

    return (
        <div
            className={tileClass}
            onClick={!disabled && onClick ? onClick : undefined}
            {...rest}
        >
            {icon &&
                <Glyphicon icon={icon} />
            }

            {children}
        </div>
    );
}

Tile.propTypes = {
    /**
    * The style name to apply to the tile
    */
    bsStyle: PropTypes.oneOf([
        'active',
        'success',
        'warning',
        'danger',
        'info',
    ]),
    /**
    * Is the tile disabled from click events?
    */
    disabled: PropTypes.bool,
    /**
    * On click handler
    */
    onClick: PropTypes.func,
    /**
    * The icon name for the Glyphicon component
    */
    icon: PropTypes.string,
};

Tile.defaultProps = {
    classes: '',
    disabled: false,
};

export default Tile;