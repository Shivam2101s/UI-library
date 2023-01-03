import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Location({
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
          strokeWidth="1.5"
          d="M12 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"
        ></path>
        <path
          stroke={primaryColorValue}
          strokeWidth="1.5"
          d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.194 5.194 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
        ></path>
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
          stroke={secondaryColorValue}
          strokeWidth="1.5"
          d="M12 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"
          opacity="0.4"
        ></path>
        <path
          stroke={primaryColorValue}
          strokeWidth="1.5"
          d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.194 5.194 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
        ></path>
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
          d="M20.62 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28A5.436 5.436 0 0012 22.25c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27z"
          opacity="0.4"
        ></path>
        <path
          fill={primaryColorValue}
          d="M12 13.46a3.15 3.15 0 100-6.3 3.15 3.15 0 000 6.3z"
        ></path>
      </svg>
    ),
  }[variant];
}

export default Location;
