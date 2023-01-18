import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stepper from './Stepper';

export default {
  title: 'Atoms/Stepper',
  component: Stepper,
  args: {
    count: 0,
    onChange: (args) => console.log(args),
    min: 0,
    max: 10,
    step: 1,
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => {
  const [count, setCount] = React.useState(0);
  return (
    <Stepper {...args} count={count} onChange={(args) => setCount(args)} />
  );
};

export const Default = Template.bind({});
