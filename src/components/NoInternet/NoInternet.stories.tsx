import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NoInternet } from './NoInternet';

export default {
  title: 'Organisms/No Internet',
  component: NoInternet,
  args: {
    overlay: false,
    onRefreshClick: () => {
      // console.log('onRefreshClick');
    },
  },
} as ComponentMeta<typeof NoInternet>;

const Template: ComponentStory<typeof NoInternet> = (args) => (
  <NoInternet {...args} />
);

export const Default = Template.bind({});

export const Overlay = Template.bind({});
Overlay.args = {
  overlay: true,
};
