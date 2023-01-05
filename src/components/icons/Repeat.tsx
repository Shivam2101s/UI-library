import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Repeat({
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
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M3.58 5.16h13.84c1.66 0 3 1.34 3 3v3.32"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M6.74 2L3.58 5.16l3.16 3.16M20.42 18.84H6.58c-1.66 0-3-1.34-3-3v-3.32"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M17.26 22l3.16-3.16-3.16-3.16"
        />
      </svg>
    ),
  }[variant];
}

export default Repeat;
