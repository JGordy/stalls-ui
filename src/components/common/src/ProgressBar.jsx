import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/ProgressBar.css';

const Filler = ({
    bsStyle,
    fillColor,
    label,
    percentage,
}) => {
    const barClass = classnames('filler', !fillColor && bsStyle);

    return (
        <div
            className={barClass}
            style={{
                color: `${fillColor}`,
                width: `${percentage}%`
            }}
        >
            {label && <span className="label">{label}</span>}
        </div>
    )
};



const ProgressBar = ({
    bsStyle,
    goal,
    current,
    fillColor,
    label,
}) => {
    const percentage = (current / goal) * 100;

    return (
        <div className="ProgressBar">
            <Filler
                bsStyle={bsStyle}
                fillColor={fillColor}
                label={label}
                percentage={percentage.toFixed(2)}
            />
        </div>
    );
}

ProgressBar.propTypes = {
    /**
    * The style name to apply to the filler
    */
    bsStyle: PropTypes.oneOf([
        'success',
        'warning',
        'danger',
        'info',
    ]),
    /**
    * The text to render in the root component
    */
    label: PropTypes.string,
    /**
    * The current value for the progress bar
    */
    current: PropTypes.number,
    /**
    * The 100% complete value for the progress bar
    */
    goal: PropTypes.number,
};

ProgressBar.defaultProps = {
    current: 0,
    goal: 100,
};

export default ProgressBar;