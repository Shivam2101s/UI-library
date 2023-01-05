import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function LocationAdd({
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
          strokeWidth="1.5"
          d="M9.25 11h5.5M12 13.75v-5.5"
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
        <g
          stroke="#414141"
          strokeLinecap="round"
          strokeWidth="1.5"
          opacity="0.4"
        >
          <path d="M9.25 11h5.5M12 13.75v-5.5"></path>
        </g>
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
          d="M20.62 8.7C19.58 4.07 15.54 2 12 2h-.01C8.46 2 4.43 4.07 3.38 8.69c-1.18 5.16 1.98 9.53 4.84 12.29A5.436 5.436 0 0012 22.51c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28z"
          opacity="0.4"
        ></path>
        <path
          fill={primaryColorValue}
          d="M14.75 10.25h-2v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h-2c-.41 0-.75.34-.75.75s.34.75.75.75h2v2c0 .41.34.75.75.75s.75-.34.75-.75v-2h2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
        ></path>
      </svg>
    ),
  }[variant];
}

export default LocationAdd;
