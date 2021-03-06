import React from 'react';
import { mount } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';
import { images } from '../../../__mocks__/story/images';
import { Hero } from '../src';

// Mock Images
const { cover_image } = images;


const defaultProps = {
    altText: 'Some image text',
    imgSrc: cover_image,
    children: <h1>Here's some sample text</h1>,
    overlayColor: 'rgba(0, 0, 0, 0.3)',
}

const testElement = <Hero {...defaultProps} />;
const wrapper = mount(testElement);

describe('<Hero />', () => {

    runStandardComponentTests(testElement);

    it('renders hero image', () => {
        expect(wrapper.find('.HeroImage').prop("src")).toBe(cover_image);
    });

    it('should have a colored overlay', () => {
        expect(wrapper.find('.Hero').prop('style').background).toBe(defaultProps.overlayColor);
    });

    it('renders children inside hero', () => {
        expect(wrapper.find('.Hero').prop('children')[0]).toBe(defaultProps.children)
    });
})