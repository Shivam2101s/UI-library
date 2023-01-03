import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Chart({
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
          strokeWidth="1.5"
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.5 18.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2s-2 .9-2 2v9a2 2 0 002 2zM8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 002 2z"
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
          fill={primaryColorValue}
          d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81v8.37C2.5 19.83 4.67 22 8.31 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.5 4.17 20.33 2 16.69 2z"
          opacity="0.4"
        />
        <path
          fill={secondaryColorValue}
          d="M16.92 7.81v8.38c0 .64-.52 1.16-1.16 1.16-.65 0-1.17-.52-1.17-1.16V7.81c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16zM10.41 12.93v3.26c0 .64-.52 1.16-1.17 1.16-.64 0-1.16-.52-1.16-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16z"
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
          strokeWidth="1.5"
          d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        />
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.5 18.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2s-2 .9-2 2v9a2 2 0 002 2zM8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 002 2z"
          opacity="0.4"
        />
      </svg>
    ),
  }[variant];
}

export default Chart;
