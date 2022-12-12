import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpotifyButton } from '../components/SpotifyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SpotifyButton',
  component: SpotifyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof SpotifyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpotifyButton> = (args) => <SpotifyButton {...args} />;


export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
