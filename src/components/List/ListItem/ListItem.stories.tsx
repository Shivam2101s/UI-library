/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from './index';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
  args: {
    label: 'ListItem',
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const Default = Template.bind({});
