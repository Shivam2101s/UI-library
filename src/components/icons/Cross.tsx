import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Cross({
  variant = 'linear',
  primaryColor = Color.grey_70,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  return {
    linear: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.757 16.242l8.486-8.485M16.243 16.243L7.757 7.758"
        />
      </svg>
    ),
    bulk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill={primaryColorValue}
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M15.712 7.227L12 10.939 8.288 7.227a.755.755 0 00-1.06 0c-.29.29-.29.77 0 1.06L10.938 12l-3.712 3.712c-.29.29-.29.771 0 1.061.29.29.77.29 1.06 0L12 13.061l3.712 3.712c.29.29.771.29 1.061 0 .29-.29.29-.77 0-1.06L13.061 12l3.712-3.712c.29-.29.29-.771 0-1.061a.755.755 0 00-1.06 0z"
        />
      </svg>
    ),
    twoTone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.757 16.242l8.486-8.485"
          opacity="0.4"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.243 16.243L7.757 7.758"
        />
      </svg>
    ),
  }[variant];
}

export default Cross;
