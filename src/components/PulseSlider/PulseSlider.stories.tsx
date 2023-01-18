import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PulseSlider from '.';

export default {
  title: 'Atoms/PulseSlider',
  component: PulseSlider,
  args: {
    getSliderValue: (val) => {},
  },
} as ComponentMeta<typeof PulseSlider>;

const Template: ComponentStory<typeof PulseSlider> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PulseSlider {...args} />
);

export const Default = Template.bind({});
