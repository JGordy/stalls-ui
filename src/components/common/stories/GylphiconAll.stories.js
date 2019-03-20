import React from "react";
import { storiesOf } from "@storybook/react";
import Glyphicon from "../src/Glyphicon";
import { library } from '@fortawesome/fontawesome-svg-core'

let icons = [];

Object.keys(library.definitions).forEach(key => {

    Object.keys(library.definitions[key]).map(nestedKey => {

        if (key === 'fas') {
            return icons.push(nestedKey);
        } else {
            return icons.push([`${key}`, nestedKey]);
        }
    });
});

storiesOf("GlyphiconAll", module)
    .add("All Icons", () => (
        icons.map(icon => {
            return (
                <span style={{
                    boxShadow: '0.2rem 0.2rem 0.4rem 0rem rgba(0,0,0,0.2)',
                    borderRadius: '5px',
                    height: '3rem',
                    width: '6rem',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0.5rem',
                    marginRight: '0',
                }}>
                    <Glyphicon icon={icon} />
                    <p style={{ margin: '0.1rem 0', fontSize: '10px' }}>
                        {Array.isArray(icon) ? icon[1] : icon}
                    </p>
                </span>
            );
        })
    ));

icons.forEach(icon => {
    storiesOf("GlyphiconAll", module)
        .add(`${Array.isArray(icon) ? icon[1] : icon}`, () => (
            <Glyphicon icon={icon} />
        ));
})