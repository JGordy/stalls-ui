import React from "react";
import { storiesOf } from "@storybook/react";
import { ProfileImage } from "../src";

const mockImage = 'https://homepages.cae.wisc.edu/~ece533/images/girl.png';

storiesOf("ProfileImage", module)
    .add("default", () => (
        <ProfileImage mainImage={mockImage} />
    ))
    .add("rounded", () => (
        <ProfileImage roundImage={true} mainImage={mockImage} />
    ))
    .add("missing url fallback", () => (
        <ProfileImage mainImage={''} />
    ))