import React from "react";
import { storiesOf } from "@storybook/react";
import MiniButton from "../src/MiniButton";
import Glyphicon from '../src/Glyphicon';

import results from '../../../../src/jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

storiesOf("MiniButton", module)
    .addDecorator(withTests({ results }))
    .addParameters({ jest: ['MiniButton.spec.js'] })
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