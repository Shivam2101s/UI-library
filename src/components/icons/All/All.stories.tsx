import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import All from './All';

export default {
  title: 'Tokens/Icons',
  component: All,
  args: {
    variant: 'full',
  },
} as ComponentMeta<typeof All>;

const Template: ComponentStory<typeof All> = (args:any) => <All {...args} />;

export const Default = Template.bind({});
