import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Snackbar from './Snackbar';

export default {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  args: {
    variant: 'positivePriority',
    label: 'Write a short message',
    onRefreshClick: () => {
      console.log('onRefreshClick');
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const Default = Template.bind({});

export const PositiveNotPriority = Template.bind({});
PositiveNotPriority.args = {
  variant: 'positiveNotPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};

export const CriticalPriority = Template.bind({});
CriticalPriority.args = {
  variant: 'criticalPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};

export const CriticalNotPriority = Template.bind({});
CriticalNotPriority.args = {
  variant: 'criticalNotPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};

export const WarningPriority = Template.bind({});
WarningPriority.args = {
  variant: 'warningPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};

export const WarningNotPriority = Template.bind({});
WarningNotPriority.args = {
  variant: 'warningNotPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};

export const NeutralPriority = Template.bind({});
NeutralPriority.args = {
  variant: 'neutralPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};

export const NeutralNotPriority = Template.bind({});
NeutralNotPriority.args = {
  variant: 'neutralNotPriority',
  label: 'Write a short message',
  onRefreshClick: () => {
    console.log('onRefreshClick');
  },
};
