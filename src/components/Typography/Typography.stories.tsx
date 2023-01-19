/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
  title: 'Tokens/Typography',
  component: Typography,
  args: {
    label: 'A quick brown fox jumped over a lazy dog 1lI',
  },  //@ts-ignore

} as ComponentMeta<typeof Typography>;
//@ts-ignore

const Template: ComponentStory<typeof Typography> = (args) => (
  //@ts-ignore
  <Typography {...args} />
);

export const Default = Template.bind({});
