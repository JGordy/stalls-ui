import React from "react";
import { storiesOf } from "@storybook/react";
import MiniButton from "../../src/components/common/MiniButton";

storiesOf("MiniButton", module)
    .add("active with fill", () => (
        <MiniButton className="success">•</MiniButton>
    ))
    // .add("active with no fill", () => (
    //     <MiniButton />
    // ))
    // .add("disabled", () => (
    //     <MiniButton />
    // ));