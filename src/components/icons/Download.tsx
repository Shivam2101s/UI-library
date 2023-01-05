import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Download({
  variant = 'linear',
  primaryColor = Color.grey_70,
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
          d="M4.266 16.858c.446 1.188 1.428 2.238 2.795 2.987C8.427 20.595 10.1 21 11.823 21c1.723 0 3.397-.406 4.763-1.155s2.349-1.799 2.794-2.987M17.412 9.823l-5.588 4.47m0 0l-5.589-4.47m5.589 4.47V2"
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
          fillRule="evenodd"
          d="M19.644 16.156a.75.75 0 00-.966.439c-.369.984-1.206 1.91-2.452 2.593-1.245.682-2.793 1.062-4.402 1.062-1.61 0-3.158-.38-4.403-1.063-1.246-.683-2.083-1.608-2.452-2.592a.75.75 0 00-1.405.527c.523 1.392 1.65 2.566 3.136 3.38 1.488.817 3.289 1.248 5.123 1.248 1.835 0 3.636-.431 5.124-1.247 1.486-.815 2.613-1.99 3.136-3.381a.75.75 0 00-.44-.966z"
          clipRule="evenodd"
        />
        <path
          fill={primaryColorValue}
          fillRule="evenodd"
          d="M17.997 9.355a.75.75 0 00-1.054-.117l-4.37 3.495V2a.75.75 0 00-1.5 0v10.733l-4.37-3.495a.75.75 0 10-.936 1.171l5.588 4.47a.75.75 0 00.937 0l5.588-4.47a.75.75 0 00.117-1.054z"
          clipRule="evenodd"
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
          d="M4.266 16.858c.446 1.188 1.428 2.238 2.795 2.987C8.427 20.595 10.1 21 11.823 21c1.723 0 3.397-.406 4.763-1.155s2.349-1.799 2.794-2.987"
        />
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.412 9.823l-5.588 4.47m0 0l-5.589-4.47m5.589 4.47V2"
        />
      </svg>
    ),
  }[variant];
}

export default Download;
