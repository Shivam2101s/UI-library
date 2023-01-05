/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadCrumbs } from './BreadCrumbs';

const BREAD_CRUMB = [
  { name: 'label', url: 'label', type: 'internal', id: 1 },
  { name: 'label', url: 'label', type: 'internal', id: 2 },
  { name: 'label', url: 'label', type: 'internal', id: 3 },
  { name: 'label', url: 'label', type: 'internal', id: 4 },
  { name: 'label', url: 'label', type: 'external', id: 5 },
];

export default {
  title: 'Molecules/BreadCrumbs',
  component: BreadCrumbs,
  args: {
    data: BREAD_CRUMB,
  },
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => (
  <BreadCrumbs {...args} />
);

export const Default = Template.bind({});
