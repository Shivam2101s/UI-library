import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Search({
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
          d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
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
          d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M21.3 22c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 010-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2z"
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
          d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M22 22l-2-2"
          opacity="0.4"
        />
      </svg>
    ),
  }[variant];
}

export default Search;
