/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';

const STEPS = [
  { key: 1, label: 'first' },
  { key: 2, label: 'second' },
  { key: 3, label: 'third' },
  { key: 4, label: 'fourth' },
  { key: 5, label: 'fifth' },
];

export default {
  title: 'Molecules/ProgressIndicator',
  component: ProgressIndicator,
  args: {
    noOfSteps: 5,
    currentStep: 3,
    variant: 'linear',
    steps: STEPS,
  },
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
  <ProgressIndicator {...args} />
);

export const Default = Template.bind({});

export const Linear = Template.bind({});
Linear.args = {
  variant: 'linear',
  noOfSteps: 5,
  currentStep: 3,
};

export const LinearWithSteps = Template.bind({});
LinearWithSteps.args = {
  noOfSteps: 5,
  currentStep: 3,
  steps: STEPS,
  variant: 'linearWithSteps',
};
