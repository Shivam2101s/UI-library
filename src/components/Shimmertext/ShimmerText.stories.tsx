import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShimmerText from '.';

export default {
  title: 'Atoms/Shimmer Text',
  component: ShimmerText,
  args: {
    label: '',
  },
} as ComponentMeta<typeof ShimmerText>;

const Template: ComponentStory<typeof ShimmerText> = (args) => (
  <ShimmerText {...args} />
);

export const Default = Template.bind({});
