import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RangeSlider from '.';

export default {
  title: 'Atoms/RangeSlider',
  component: RangeSlider,
  args: {
    min: 1,
    minLabel: '0',
    maxLabel: '100',
    max: 100,
    step: 10,
    fillColor: 'dark',
    valueColor: 'dark',
  },
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <RangeSlider {...args} />
);

export const Default = Template.bind({});
