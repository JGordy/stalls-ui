import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/Button";

storiesOf("Button", module)
    .add("active with fill", () => (
        <Button label={`continue`} fill={true} active />
    ))
    .add("active with no fill", () => (
        <Button label={`sign up`} fill={false} active />
    ))
    .add("disabled", () => (
        <Button label={`continue`} active={false} />
    ));