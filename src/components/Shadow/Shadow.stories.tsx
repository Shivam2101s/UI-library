import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Shadow } from './Shadow';

export default {
  title: 'Tokens/Shadow',
  component: Shadow,
  args: {
    variant: 'full',
  },
} as ComponentMeta<typeof Shadow>;

const Template: ComponentStory<typeof Shadow> = (args) => <Shadow {...args} />;

export const All = Template.bind({});
