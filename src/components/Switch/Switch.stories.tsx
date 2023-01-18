import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  args: {
    isChecked: false,
    disabled: false,
    isYesNo: false,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
