/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import ChevronRight from '../icons/ChevronRight';
import ChevronLeft from '../icons/ChevronLeft';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const PrimaryWithLeftIcon = Template.bind({});
PrimaryWithLeftIcon.args = {
  leftIcon: <ChevronLeft primaryColor="grey_white" />,
};

export const PrimaryWithRightIcon = Template.bind({});
PrimaryWithRightIcon.args = {
  rightIcon: <ChevronRight primaryColor="grey_white" />,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  isDisabled: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  isDisabled: true,
  isLoading: true,
};
