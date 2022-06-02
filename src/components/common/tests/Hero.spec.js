import React from 'react';
import { render } from '@testing-library/react';
import { componentExists, checkConsoleWarnOrErrors } from 'testUtils/standard-tests';
import { images } from '__mocks__/story/images';
import { Hero } from '../src';

// Mock Images
const { cover_image } = images;

const defaultProps = {
    altText: 'Some image text',
    imgSrc: cover_image,
    children: <h1>Here's some sample text</h1>,
    overlayColor: 'rgba(0, 0, 0, 0.3)',
}

const testComponent = <Hero {...defaultProps} />;

describe('<Hero />', () => {

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

    componentExists(Hero, defaultProps, '.Hero');

    it('renders hero image', () => {
        expect(getAllByAltText(defaultProps.altText)[0].src).toContain(cover_image);
    });

    it('should have a colored overlay', () => {
        expect(container.querySelector('.Hero').style.background).toContain('rgba(0, 0, 0, 0.3)');
    });

    it('renders children inside hero', () => {
        expect(getAllByText('Here\'s some sample text')[0]).toBeInTheDocument();
    });
})