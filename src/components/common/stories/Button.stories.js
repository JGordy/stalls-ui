import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/Button";

storiesOf("Button", module)
    .add("active with fill", () => (
        <Button label='continue' fill={true} />
    ))
    .add("active with no fill", () => (
        <Button label='sign up' fill={false} />
    ))
    .add("disabled", () => (
        <Button label='continue' disabled />
    ))
    .add("with Icon", () => (
        <Button label='share' icon='share-alt' fill />
    ));