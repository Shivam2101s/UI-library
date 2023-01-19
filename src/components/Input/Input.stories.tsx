import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';
import Search from '../icons/Search';
import Cross from '../icons/Cross';
import Rupee from '../icons/Rupee';
import { Color } from '../../primitives';

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {
    label: 'Label',
    scrollIntoView: true,
    placeholder: 'Placeholder',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '',
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  label: '',
  leftIcon: <Search primaryColor={Color.grey_30} width={20} height={20} />,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: '',
  leftIcon: <Rupee />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: '',
  rightIcon: <Cross />,
};
