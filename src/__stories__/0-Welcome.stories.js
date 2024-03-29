import React from 'react';
// import { linkTo } from '@storybook/addon-links';
// import LinkTo from '@storybook/addon-links/react';

/* eslint-disable-next-line import/no-anonymous-default-export */
export default {
    title: 'Welcome',
};

// export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;
export const toStorybook = () => (
    <div style={{ maxWidth: '600px' }}>
        <h1>Welcome to generosity-market/stalls-ui</h1>
        <p>This is a UI component dev environment for your app.</p>

        <p>We've added some basic stories inside the `src/components` directory.
            A story is a single state of one or more UI components. You can have as many stories as you want.
            (Basically a story is like a visual test case.)</p>

        <p>See these sample stories for a component called Button.</p>

        <p>Just like that, you can add your own components as stories.
            You can also edit those components and see changes right away.
            (Try editing the Button stories located at src / components / stories / Button.stories.js.)</p >

        <p>Usually we create stories with smaller UI components in the app.</p >
    </div>
)

toStorybook.storyName = 'to Storybook';
