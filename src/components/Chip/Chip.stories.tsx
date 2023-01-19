/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from './Chip';
import ChevronRight from '../icons/ChevronRight';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  args: {
    label: 'Chip',
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <ChevronRight width={24} primaryColor="grey_white" />,
};
