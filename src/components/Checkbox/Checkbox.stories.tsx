import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { CheckboxVariant } from '../../primitives';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    label: 'A quick brown fox jumped over a lazy dog 1lI',
    description: 'A quick brown fox jumped over a lazy dog 1lI',
    isChecked: false,
    disabled: false,
    variant: CheckboxVariant.Default,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
