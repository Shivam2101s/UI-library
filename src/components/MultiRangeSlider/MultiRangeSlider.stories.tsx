import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MultiRangeSlider from '.';

export default {
  title: 'Atoms/MultiRangeSlider',
  component: MultiRangeSlider,
  args: {
    start: 0,
    stop: 20000,
    step: 1000,
    isCurrency: true,
    minMaxVisible: true,
    startStopColor: 'dark',
    minMaxColor: 'dark',
  },
} as ComponentMeta<typeof MultiRangeSlider>;

const Template: ComponentStory<typeof MultiRangeSlider> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MultiRangeSlider {...args} />
);

export const Default = Template.bind({});
