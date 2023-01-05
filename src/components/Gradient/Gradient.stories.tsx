import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Gradient } from './Gradient';

export default {
  title: 'Tokens/Gradient',
  component: Gradient,
  args: {
    variant: 'full',
  },
} as ComponentMeta<typeof Gradient>;

const Template: ComponentStory<typeof Gradient> = (args:any) => (
  <Gradient {...args} />
);

export const All = Template.bind({});
