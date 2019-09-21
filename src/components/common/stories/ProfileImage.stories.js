import React from "react";
import { storiesOf } from "@storybook/react";
import { ProfileImage } from "../src";

const mockImage = 'https://homepages.cae.wisc.edu/~ece533/images/girl.png';

storiesOf("ProfileImage", module)
    .addParameters({ jest: ['ProfileImage.spec.js'] })
    .addParameters({ component: ProfileImage })
    .add("default", () => (
        <ProfileImage src={mockImage} />
    ))
    .add("rounded", () => (
        <ProfileImage roundImage={true} src={mockImage} />
    ))
    .add("missing url fallback", () => (
        <ProfileImage src={''} />
    ))