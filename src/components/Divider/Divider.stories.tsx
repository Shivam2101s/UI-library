import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Tokens/Divider',
  component: Divider,
  args: {
    variant: 'full',
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
