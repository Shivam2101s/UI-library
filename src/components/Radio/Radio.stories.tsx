import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  args: {
    label: 'A quick brown fox jumped over a lazy dog 1lI',
    description: 'A quick brown fox jumped over a lazy dog 1lI',
    isChecked: false,
    disabled: false,
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
