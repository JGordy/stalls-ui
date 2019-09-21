import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HeroImage.css'

/**
* > Typical hero section that accepts children components
*/
const HeroImage = ({
    altText,
    children,
    classes,
    imgSrc,
    overlayColor,
    ...rest
}) => {

    return (
        <div
            className='Hero'
            style={{ background: `${overlayColor}` }}
            {...rest}
        >
            {children}
            <img
                className={`HeroImage ${classes ? classes : ''}`}
                src={imgSrc}
                alt={altText}
            />
        </div>
    );
}

HeroImage.propTypes = {
    /**
    * Children to render in the hero container
    */
    children: PropTypes.node,
    /**
    * Image source path/url
    */
    imgSrc: PropTypes.string,
    /**
    * Alternate text for accessibility
    */
    altText: PropTypes.string,
    /**
    * Color of the overlay,
    * accepts rgba(0-255, 0-255, 0-255, 0-1)
    */
    overlayColor: PropTypes.string,
    /**
    * Classnames to add to the component
    */
    classes: PropTypes.string,
};

HeroImage.defaultProps = {

};

export default HeroImage;