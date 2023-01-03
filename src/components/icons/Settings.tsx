import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Settings({
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
          d="M22 6.5h-6M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 17.5h-4M8 17.5H2M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        />
      </svg>
    ),
    bulk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill={primaryColorValue}
          d="M21.23 7.62h-5.54c-.38 0-.69-.31-.69-.7 0-.38.31-.69.69-.69h5.54c.38 0 .69.31.69.69 0 .39-.31.7-.69.7zM6.46 7.62H2.77c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69h3.69c.38 0 .69.31.69.69 0 .38-.31.69-.69.69z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M10.15 10.84a3.92 3.92 0 100-7.84 3.92 3.92 0 000 7.84z"
        />
        <path
          fill={primaryColorValue}
          d="M21.23 17.77h-3.69c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69h3.69c.38 0 .69.31.69.69 0 .38-.31.69-.69.69zM8.31 17.77H2.77c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69h5.54c.38 0 .69.31.69.69 0 .38-.31.69-.69.69z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M13.85 21a3.92 3.92 0 100-7.84 3.92 3.92 0 000 7.84z"
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
          d="M22 6.5h-6"
        />
        <g
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          opacity="0.4"
        >
          <path d="M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        </g>
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M8 17.5H2"
        />
        <g
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          opacity="0.4"
        >
          <path d="M22 17.5h-4M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        </g>
      </svg>
    ),
  }[variant];
}

export default Settings;
