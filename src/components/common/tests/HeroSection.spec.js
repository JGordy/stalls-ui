import React from 'react';
import { mount } from 'enzyme';
import { runStandardComponentTests } from '../../../testUtils/standard-tests';
import { images } from '../../../__mocks__/story/images';
import {
    Hero,
    HeroSection,
    ProfileImage,
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

const testElement = <HeroSection {...defaultProps} />;
const wrapper = mount(testElement);

describe('<HeroSection />', () => {

    runStandardComponentTests(testElement);

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders hero image', () => {
        expect(wrapper.find('.HeroSection').childAt(0).type()).toBe(Hero);
    });

    it('renders profile image', () => {
        expect(wrapper.find('.HeroSection').childAt(1).type()).toBe(ProfileImage);
    });

    it.skip('renders children inside hero', () => {
        console.warn('Wrapper: ', wrapper.find('.HeroSection').childAt(0))
        expect(wrapper.find('.HeroSection').childAt(0).childAt(0)).toBe('h1')
    });
})