import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CornerRadius } from './CornerRadius';

export default {
  title: 'Tokens/Shadow',
  component: CornerRadius,
  args: {
    variant: 'full',
  },
} as ComponentMeta<typeof CornerRadius>;

const Template: ComponentStory<typeof CornerRadius> = (args:any) => (
  <CornerRadius {...args} />
);

export const All = Template.bind({});
