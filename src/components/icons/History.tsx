import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function History({
  variant = 'linear',
  primaryColor = Color.grey_70,
  width = 24,
  height = 25,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  return {
    linear: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 25"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.56"
          d="M13.98 4.97L12 2.5"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.09 8.3c1.11 1.48 1.8 3.31 1.8 5.31A8.89 8.89 0 0112 22.5a8.89 8.89 0 01-8.89-8.89A8.89 8.89 0 0112 4.72c.68 0 1.34.09 1.98.24M11.25 10v5M14.892 16.857l-3.642-1.856"
        />
      </svg>
    ),
  }[variant];
}

export default History;
