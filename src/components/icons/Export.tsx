import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Export({
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
          d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 15V3.62M15.35 5.85L12 2.5 8.65 5.85"
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
          d="M16.8 9H7.2C4 9 2 11 2 14.2v2.59C2 20 4 22 7.2 22h9.59c3.2 0 5.2-2 5.2-5.2v-2.6C22 11 20 9 16.8 9z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M15.88 5.57l-3.35-3.35a.754.754 0 00-1.06 0L8.12 5.57c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l2.07-2.07v10.69c0 .41.34.75.75.75s.75-.34.75-.75V4.56l2.07 2.07c.15.15.34.22.53.22s.38-.07.53-.22c.3-.29.3-.76 0-1.06z"
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
          d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2"
        />
        <g
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          opacity="0.4"
        >
          <path d="M12 15V3.62M15.35 5.85L12 2.5 8.65 5.85" />
        </g>
      </svg>
    ),
  }[variant];
}

export default Export;
