import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContentHeader from '.';

export default {
  title: 'Molecules/Content Header',
  component: ContentHeader,
  args: {
    title: 'Big title',
    subtitle: 'Subtitle',
  },
} as ComponentMeta<typeof ContentHeader>;

const Template: ComponentStory<typeof ContentHeader> = (args:any) => (
  //@ts-ignore
  <ContentHeader {...args} />
);

export const Default = Template.bind({});
