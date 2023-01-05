import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function ArrowLeft({
  variant = 'linear',
  primaryColor = Color.grey_80,
  secondaryColor = Color.grey_40,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  const secondaryColorValue = ColorsPallete[secondaryColor];
  return {
    linear: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
        />
      </svg>
    ),
    bulk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <path
          fill={secondaryColorValue}
          d="M8.31 2h8.37c3.65 0 5.82 2.17 5.82 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.31c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.5 4.17 4.67 2 8.31 2z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M5.97 11.47l4.29-4.29c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.01 3.01H18.5c.41 0 .75.34.75.75s-.34.75-.75.75H8.31l3.01 3.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.29-4.29a.75.75 0 010-1.06z"
        />
      </svg>
    ),
    twoTone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M9.57 5.93L3.5 12l6.07 6.07"
        />
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M20.5 12H3.67"
          opacity="0.4"
        />
      </svg>
    ),
  }[variant];
}

export default ArrowLeft;
