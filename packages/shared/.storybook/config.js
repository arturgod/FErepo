import { configure } from '@storybook/react';

const storiesReq = require.context('../src', true, /story\.js$/);

function loadStories() {
  storiesReq.keys().forEach((fileName) => storiesReq(fileName));
}

configure(loadStories, module);
