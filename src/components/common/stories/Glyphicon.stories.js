import React from "react";
import { storiesOf } from "@storybook/react";
import Glyphicon from "../src/Glyphicon";

storiesOf("Glyphicon", module)
    .add("User icon", () => (
        <Glyphicon icon={`user`} />
    ))
    .add("Camera icon", () => (
        <Glyphicon icon={`camera`} />
    ))
    .add("Download Icon", () => (
        <Glyphicon icon={`download`} />
    ));