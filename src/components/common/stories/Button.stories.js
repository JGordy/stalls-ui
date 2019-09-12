import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/Button";

storiesOf("Button", module)
    .add("w/ bsStyle of success", () => (
        <Button label='continue' bsStyle='success' />
    ))
    .add("w/ bsStyle of warning", () => (
        <Button label='continue' bsStyle='warning' />
    ))
    .add("w/ bsStyle of danger", () => (
        <Button label='continue' bsStyle='danger' />
    ))
    .add("w/ bsStyle of info", () => (
        <Button label='continue' bsStyle='info' />
    ))
    .add("w/ inverted prop", () => (
        <Button label='sign up' bsStyle='success' inverted />
    ))
    .add("disabled", () => (
        <Button label='continue' disabled />
    ))
    .add("with Icon", () => (
        <Button label='share' icon='share-alt' bsStyle='success' />
    ))
    .add("with href", () => (
        <Button label='navigate' bsStyle='info' href='#' />
    ));