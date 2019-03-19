import React from "react";
import { storiesOf } from "@storybook/react";
import MiniButton from "../src/MiniButton";
import Glyphicon from '../src/Glyphicon';

storiesOf("MiniButton", module)
    .add("W/ Font Awesome icon", () => (
        <MiniButton className="success">
            <Glyphicon icon={'home'} />
        </MiniButton>
    ))
    // .add("active with no fill", () => (
    //     <MiniButton />
    // ))
    // .add("disabled", () => (
    //     <MiniButton />
    // ));