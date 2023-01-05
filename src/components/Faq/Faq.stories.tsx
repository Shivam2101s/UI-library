import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Faq from '.';

const FAQS = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
  },
];

export default {
  title: 'Organisms/Faq',
  component: Faq,
  args: {
    heading: "FAQ's",
    faqs: FAQS,
    isOpen: true,
  },
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Faq {...args} />
);

export const Default = Template.bind({});
