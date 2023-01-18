import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Color } from '../../primitives';
import Rating from '.';

export default {
  title: 'Atoms/Rating',
  component: Rating,
  args: {
    title: 'Customer Ratings',
    averageRating: 4.3,
    totalRating: 100,
    details: [
      { percent: 51, rating: 5 },
      { percent: 21, rating: 4 },
      { percent: 11, rating: 3 },
      { percent: 30, rating: 2 },
      { percent: 1, rating: 1 },
    ],
    topRatingColor: Color.positive_50,
    midRatingColor: Color.orange_50,
    lowRatingColor: Color.negative_60,
    bgColor: Color.grey_white,
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Rating {...args} />
);

export const Default = Template.bind({});
