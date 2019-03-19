import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "../src/ProfileImage";

storiesOf("ProfileImage", module)
    .add("default", () => (
        <ProfileImage mainImage={'https://homepages.cae.wisc.edu/~ece533/images/girl.png'} />
    ))
    .add("rounded", () => (
        <ProfileImage roundImage={true} mainImage={'https://homepages.cae.wisc.edu/~ece533/images/girl.png'} />
    ))
    .add("missing url fallback", () => (
        <ProfileImage mainImage={''} />
    ))