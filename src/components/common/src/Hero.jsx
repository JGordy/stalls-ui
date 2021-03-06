import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../styles/Hero.css'

/**
* > Typical hero section that accepts children components
*/
const Hero = ({
    altText,
    children,
    classes,
    imgSrc,
    overlayColor,
    ...rest
}) => {
    const imgClass = classnames('HeroImage', classes);

    return (
        <div
            className='Hero'
            style={{ background: `${overlayColor}` }}
            {...rest}
        >
            {children}
            <img
                className={imgClass}
                src={imgSrc}
                alt={altText}
            />
        </div>
    );
}

Hero.propTypes = {
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

Hero.defaultProps = {

};

export default Hero;