import { configure } from "@storybook/react";

function loadStories() {
    require('../src/stories/index.js');
    require('../src/stories/Button');
    require('../src/stories/MiniButton');
    require('../src/stories/ProfileImage');
    // You can require as many stories as you need.
}

configure(loadStories, module);