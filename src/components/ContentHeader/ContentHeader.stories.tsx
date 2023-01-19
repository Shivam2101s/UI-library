import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ContentHeader from '.';

export default {
  title: 'Molecules/Content Header',
  component: ContentHeader,
  args: {
    title: 'Big title',
    subtitle: 'Subtitle',
  },
} as ComponentMeta<typeof ContentHeader>;

const Template: ComponentStory<typeof ContentHeader> = (args:any) => (
  <ContentHeader {...args} />
);

export const Default = Template.bind({});
