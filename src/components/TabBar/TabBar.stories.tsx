import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TabBar from '.';

export default {
  title: 'Molecules/Tab Bar',
  component: TabBar,
  args: {
    tabItems: [],
  },
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabItems: ['Home', 'Profile'],
  activeTab: 0,
};
