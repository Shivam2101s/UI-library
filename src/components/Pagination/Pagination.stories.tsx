/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: {
    activePage: 1,
    totalPages: 5,
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
