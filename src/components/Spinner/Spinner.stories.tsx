/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from '.';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  args: {
    size: 'm',
    variant: 'default',
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
