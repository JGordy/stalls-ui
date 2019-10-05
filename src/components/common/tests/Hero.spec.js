import React from 'react';
import { mount } from 'enzyme';
import { images } from '../../../__mocks__/story/images';
import { Hero } from '../src';

// Mock Images
const { coverImage } = images;


const defaultProps = {
    altText: 'Some image text',
    imgSrc: coverImage,
    children: <h1>Here's some sample text</h1>,
    overlayColor: 'rgba(0, 0, 0, 0.3)',
}

const wrapper = mount(<Hero {...defaultProps} />);

describe('<Hero />', () => {

    it('renders without crashing', () => {
        expect(wrapper.exists('.Hero')).toBe(true);
    });

    it('renders hero image', () => {
        expect(wrapper.find('.HeroImage').prop("src")).toBe(coverImage);
    });

    it('should have a colored overlay', () => {
        expect(wrapper.find('.Hero').prop('style').background).toBe(defaultProps.overlayColor);
    });

    it('renders children inside hero', () => {
        expect(wrapper.find('.Hero').prop('children')[0]).toBe(defaultProps.children)
    });
})