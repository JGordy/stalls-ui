import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";

storiesOf("Button", module)
    .addParameters({ jest: ['Button.spec.js'] })
    .add('W/ bsStyle examples', () => (
        <React.Fragment>
            <Button label='success' bsStyle='success' />
            <Button label='warning' bsStyle='warning' />
            <Button label='danger' bsStyle='danger' />
            <Button label='info' bsStyle='info' />
            <Button label='disabled' disabled />
        </React.Fragment>
    ))
    .add("w/ inverted prop", () => (
        <React.Fragment>
            <Button label='success' bsStyle='success' inverted />
            <Button label='warning' bsStyle='warning' inverted />
            <Button label='danger' bsStyle='danger' inverted />
            <Button label='info' bsStyle='info' inverted />
            <Button label='disabled' disabled inverted />
        </React.Fragment>
    ))
    .add("with Icon", () => (
        <Button label='share' icon='share-alt' bsStyle='success' />
    ))
    .add("with href", () => (
        <Button label='navigate' bsStyle='info' href='#' />
    ));