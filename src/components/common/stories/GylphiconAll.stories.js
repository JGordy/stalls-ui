import React from "react";
import { Glyphicon } from "../src";
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

export default {
    title: 'Atoms/GlyphiconAll',

    parameters: {
        jest: ['Glyphicon.spec.js'],
        component: Glyphicon,
    },
};

export const allIcons = () => (
    icons.map(icon => {
        return (
            <span
                key={icon}
                style={{
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
                }}
            >
                <Glyphicon icon={icon} />
                <p style={{ margin: '0.1rem 0', fontSize: '10px' }}>
                    {Array.isArray(icon) ? icon[1] : icon}
                </p>
            </span>
        );
    })
);

allIcons.storyName = 'All Icons';