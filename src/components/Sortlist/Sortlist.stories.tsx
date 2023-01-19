import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sortlist from '.';

export default {
  title: 'Molecules/Sortlist',
  component: Sortlist,
  args: {
    labels: [
      { text: 'Option 1', value: 'option_1' },
      { text: 'Option 2', value: 'option_2' },
    ],
    selectedLabel: '',
  },
} as ComponentMeta<typeof Sortlist>;

const Template: ComponentStory<typeof Sortlist> = (args) => (
  <Sortlist {...args} />
);

export const Default = Template.bind({});
Default.args = {
  //@ts-ignore
  variant: 'primary',
};
