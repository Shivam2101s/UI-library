/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';

export default {
  title: 'Molecules/Alert',
  component: Alert,
  args: {
    variant: 'critical',
    heading: 'Your insurance has expired',
    subheading: 'Renew you insurance',
    buttonText: 'Renew',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
