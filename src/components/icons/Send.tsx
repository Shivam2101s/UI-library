import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Send({
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
          strokeWidth="1.5"
          d="M7.4 6.32l8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92zM10.11 13.65l3.58-3.59"
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
          d="M7.4 6.32l8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92z"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.11 13.65l3.58-3.59"
          opacity="0.34"
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
          fill={secondaryColorValue}
          d="M7.11 5.96l9.02-3.01c4.05-1.35 6.25.86 4.91 4.91l-3.01 9.02c-2.02 6.07-5.34 6.07-7.36 0l-.89-2.68-2.68-.89c-6.06-2.01-6.06-5.32.01-7.35z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M12.12 11.63l3.81-3.82zM12.12 12.38c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.8 3.82c-.15.14-.34.22-.53.22z"
        />
      </svg>
    ),
  }[variant];
}

export default Send;
