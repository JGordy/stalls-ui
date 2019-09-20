import React from "react";
import { storiesOf } from "@storybook/react";
import { MiniButton } from "../src";

const commonProps = (type) => ({
    bsStyle: type,
    onClick: () => alert(`${type} Button Clicked!`),
});

storiesOf("MiniButton", module)
    .addParameters({ jest: ['MiniButton.spec.js'] })
    .add("W/ bsStyle examples", () => (
        <React.Fragment>
            <MiniButton icon='home' {...commonProps('success')} />
            <span>success</span>
            <MiniButton icon='plus' {...commonProps('warning')} />
            <span>warning</span>
            <MiniButton icon='times'  {...commonProps('danger')} />
            <span>danger</span>
            <MiniButton icon='plus' {...commonProps('info')} />
            <span>info</span>
            <MiniButton icon='plus' disabled {...commonProps('default')} />
            <span>disabled</span>
        </React.Fragment>
    ))
    .add("Inverted", () => (
        <React.Fragment>
            <MiniButton icon='home' {...commonProps('success')} inverted />
            <span>success</span>
            <MiniButton icon='plus' {...commonProps('warning')} inverted />
            <span>warning</span>
            <MiniButton icon='times' {...commonProps('danger')} inverted />
            <span>danger</span>
            <MiniButton icon='plus' {...commonProps('info')} inverted />
            <span>info</span>
            <MiniButton icon='plus' {...commonProps('default')} disabled inverted />
            <span>disabled</span>
        </React.Fragment>
    ));