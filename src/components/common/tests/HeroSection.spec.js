import React from 'react';
import { render } from '@testing-library/react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';
import { images } from '__mocks__/story/images';
import {
    HeroSection,
} from '../src';

// Mock Images
const { cover_image, profile_image } = images;

const defaultProps = {
    coverAltText: 'Some image text',
    coverImgSrc: cover_image,
    profileImgSrc: profile_image,
    children: <h1>Here's some sample text</h1>,
    overlayColor: 'rgba(0, 0, 0, 0.3)',
    roundedProfile: true,
}

const testComponent = <HeroSection {...defaultProps} />;

describe('<HeroSection />', () => {

    let container;
    let getAllByText;
    let getAllByAltText;

    beforeEach(() => {
        ({
            container,
            getAllByText,
            getAllByAltText,
        } = render(testComponent));
    });

    checkConsoleWarnOrErrors();

    componentExists(HeroSection, defaultProps, '.Hero');

    it('renders hero image', () => {
        expect(getAllByAltText(defaultProps.coverAltText)[0].src).toContain(cover_image);
    });

    it('renders profile image', () => {
        expect(container.querySelector('.ProfileImage')).toBeInTheDocument();
    });

    it('renders children inside hero', () => {
        expect(getAllByText('Here\'s some sample text')[0]).toBeInTheDocument();
    });
})