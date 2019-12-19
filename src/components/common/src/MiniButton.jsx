import React from 'react';
import PropTypes from 'prop-types';
import Glyphicon from './Glyphicon';
import classnames from 'classnames';

import '../styles/MiniButton.css';

const MiniButton = ({
    bsStyle,
    disabled,
    icon,
    inverted,
    onClick,
    ...rest
}) => {
    const btnClass = classnames('btns', bsStyle, { inverted, disabled });

    return (
        <div
            className={btnClass}
            onClick={!disabled ? onClick : undefined}
            {...rest}
        >
            <Glyphicon icon={icon} />
        </div>
    )
};

MiniButton.propTypes = {
    /**
    * The style name to apply to the button
    */
    bsStyle: PropTypes.oneOf([
        'default',
        'success',
        'warning',
        'danger',
        'info',
    ]),
    /**
    * Is the button disabled?
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
    /**
    * Boolean to render an inverted color scheme
    */
    inverted: PropTypes.bool,
};

MiniButton.defaultProps = {
    disabled: false,
    inverted: false,
    // onClick: () => { },
};

export default MiniButton;