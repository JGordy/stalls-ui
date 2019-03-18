import { configure } from "@storybook/react";

function loadStories() {
    require('../src/components/common/stories/index.js');
    require('../src/components/common/stories/Button');
    require('../src/components/common/stories/MiniButton');
    require('../src/components/common/stories/ProfileImage');
    // You can require as many stories as you need.
}

configure(loadStories, module);