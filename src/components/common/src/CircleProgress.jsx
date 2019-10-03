import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CircleProgress.css';


// const CircleProgress = ({
//     // bsStyle,
//     // bsSize,
//     current,
//     fillColor,
//     goal,
//     strokeColor,
//     strokeWidth,
// }) => {

//     const DIAMETER = 50;
//     const RADIUS = DIAMETER / 2 - strokeWidth / 2;
//     const CIRCUMFERENCE = Math.PI * RADIUS * 2;
//     const percentage = (current / goal) * 100;
//     console.warn('%%%', percentage);

//     return (
//         <div className='CircleProgress'>
//             <svg
//                 width="100px"
//                 height="100px"
//                 className="svg-circle"
//             >
//                 <circle
//                     cx={DIAMETER / 2}
//                     cy={DIAMETER / 2}
//                     r={RADIUS}
//                     fill={fillColor}
//                     stroke='tomato'
//                     strokeWidth={strokeWidth}
//                     style={{
//                         strokeDashArray: CIRCUMFERENCE,
//                         strokeDashOffset: CIRCUMFERENCE * percentage
//                     }}
//                 />
//             </svg>
//         </div>
//     );
// };

// CircleProgress.propTypes = {
//     /**
//     * The size name to apply to the component
//     */
//     bsStyle: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
//     /**
//     * The current value for the progress bar
//     */
//     current: PropTypes.number,
//     /**
//     * The 100% complete value for the progress bar
//     */
//     goal: PropTypes.number,
// };

// CircleProgress.defaultProps = {
//     current: 0,
//     goal: 100,
//     strokeWidth: 6,
// };

// export default CircleProgress;


const CircleProgress = ({
    current,
    fillColor,
    goal,
    rounded,
    sqSize,
    strokeColor,
    strokeWidth,
}) => {
    const percentage = (current / goal) * 100;
    // const complete = percentage === 100;
    // const notMoved = percentage === 1;

    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;

    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;

    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;

    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <svg
            className='CircleProgress'
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}
        >
            <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                fill={fillColor}
                stroke={fillColor}
                strokeWidth={`${strokeWidth}px`}
            />

            <circle
                className="circle-progress"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius - strokeWidth}
                fill={fillColor}
                stroke={strokeColor}
                strokeLinecap={rounded ? 'round' : null}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }}
            />

            <text
                className="circle-text"
                x="50%"
                y="50%"
                dy=".3em"
                fill={strokeColor}
                textAnchor="middle">
                {`${percentage}%`}
            </text>
        </svg>
    );
}

CircleProgress.propTypes = {
    /**
    * The size name to apply to the component
    */
    bsStyle: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
    /**
    * The current value for the progress bar
    */
    current: PropTypes.number,
    /**
    * The 100% complete value for the progress bar
    */
    goal: PropTypes.number,
};

CircleProgress.defaultProps = {
    current: 0,
    goal: 100,
    strokeWidth: 6,
};

export default CircleProgress;
