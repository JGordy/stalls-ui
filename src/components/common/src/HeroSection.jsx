import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HeroSection.css'

import {
    Hero,
    ProfileImage,
} from './index';


/**
 * `HeroSection` contains the `Hero` image, `ProfileImage`, and page heading
 */
const HeroSection = ({
    coverAltText,
    coverImgSrc,
    children,
    profileImgSrc,
    roundedProfile,
    overlayColor,
}) => {

    return (
        <div className='HeroSection'>
            <Hero
                altText={coverAltText}
                imgSrc={coverImgSrc}
                overlayColor={overlayColor}
            >
                {children}
            </Hero>

            <ProfileImage
                placeholder={null}
                round_image={roundedProfile}
                src={profileImgSrc}
            />
        </div>
    );
}

HeroSection.propTypes = {
    /**
    * Children to render in the hero container
    */
    children: PropTypes.node,
    /**
    * The heading/text to dislpay in the hero image, if available
    */
    heading: PropTypes.string,
    /**
    * The src attribute for the hero image, if available
    */
    coverImgSrc: PropTypes.string,
    /**
    * The src attribute for the profile image, if available
    */
    profileImgSrc: PropTypes.string,
    /**
     * Alternate text for accessibility
     */
    coverAltText: PropTypes.string,
    /**
    * Color of the overlay,
    * accepts rgba(0-255, 0-255, 0-255, 0-1)
    */
    overlayColor: PropTypes.string,
};

HeroSection.defaultProps = {};

export default HeroSection;