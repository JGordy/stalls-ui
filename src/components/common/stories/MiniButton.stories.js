import React from "react";
import { storiesOf } from "@storybook/react";
import MiniButton from "../src/MiniButton";

import results from '../../../../src/jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

storiesOf("MiniButton", module)
    .addDecorator(withTests({ results }))
    .addParameters({ jest: ['MiniButton.spec.js'] })
    .add("W/ Font Awesome icon", () => (
        <MiniButton bsStyle="success" icon='home' />
    ))
    .add("With 'success' classname", () => (
        <MiniButton bsStyle="success" icon='plus' />
    ))
    .add("With 'warning' classname", () => (
        <MiniButton bsStyle="warning" icon='plus' />
    ))
    .add("With 'danger' classname", () => (
        <MiniButton bsStyle="danger" icon='times' />
    ))
    .add("With 'info' classname", () => (
        <MiniButton bsStyle="info" icon='plus' />
    ))
    .add("With 'inverted' classname", () => (
        <MiniButton bsStyle="warning" icon='plus' inverted />
    ))
    .add("disabled", () => (
        <MiniButton icon='plus' disabled />
    ));