import React from 'react';
import { Color, TypeScales } from '../../primitives';
import Typography from '../Typography';

const randomText = [
  'About 1,65,000 cars are produced everyday',
  'An average car has over 30,000 parts',
  'In Delhi, parking takes upto 10% of the urban land',
  'It is a criminal offence to drive around in a dirty car in Russia',
  'Up to 80% of an average car is recyclable',
  'Texting while driving increases the chances of a crash by 23 times',
  'Airbags inflate in just 30 milliseconds',
  'Jamshed ji Tata was the first indian to own a car',
  'Driving at 90kmph, it would take 6 months to reach the moon',
  'The first ever car accident occurred in 1891',
  'Driving at 90kmph, it would take 6 months to reach the moon',
];

export function ShimmerText({ label }: { label?: string }) {
  return (
    //@ts-ignore
    <Typography
      variant={TypeScales.body_b}
      color={Color.text_placeholder}
      label={label || randomText[Math.floor(Math.random() * randomText.length)]}
    />
  );
}
