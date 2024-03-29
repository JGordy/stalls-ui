import React from 'react';
import { MiniButton } from './index';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/FileInput.css';

const FileInput = ({
    bsStyle,
    classes,
    disabled,
    icon,
    inputName,
    inverted,
    onChange,
    onClick,
    ...rest
}) => {
    const inputClass = classnames('FileInput', `${inputName}_input`);
    const labelClass = classnames('FileInput', `${inputName}_label`, classes);

    return (
        <label
            className={labelClass}
            {...rest}
        >
            <MiniButton
                bsStyle={bsStyle}
                icon={icon}
                inverted={inverted}
                disabled={disabled}
            />
            <input
                className={inputClass}
                onChange={onChange}
                onClick={onClick}
                type="file"
            />
        </label>
    );
}

FileInput.propTypes = {
    /**
    * The style name to apply to the button
    */
    bsStyle: PropTypes.oneOf([
        'default',
        'success',
        'warning',
        'danger',
        'info',
        'disabled',
    ]),
    /**
    * Is the button disabled?
    */
    disabled: PropTypes.bool,
    /**
    * Boolean to render an inverted color scheme
    */
    inverted: PropTypes.bool,
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
};

FileInput.defaultProps = {
    icon: 'plus',
};

export default FileInput;

// onChange = {(event) => {
//     event.preventDefault();
//     dispatch({
//         type: 'SET_IMAGE',
//         payload: {
//             files: event.target.files,
//             field: input.image_type,
//             url: input.argument,
//         },
//     });
// }}
