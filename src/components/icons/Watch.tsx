import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Timer({
  variant = 'linear',
  primaryColor = Color.grey_80,
  secondaryColor,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  const secondaryColorValue = ColorsPallete[secondaryColor];
  return {
    linear: (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${height} ${width}`}
        fill={secondaryColorValue || 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
          stroke={primaryColorValue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001"
          stroke={primaryColorValue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    twoTone: (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${height} ${width}`}
        fill={secondaryColorValue || 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
          stroke={primaryColorValue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001"
          stroke={primaryColorValue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    bulk: (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${height} ${width}`}
        fill={secondaryColorValue || 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill={primaryColorValue}
        />
        <path
          d="M15.7099 15.93C15.5799 15.93 15.4499 15.9 15.3299 15.82L12.2299 13.97C11.4599 13.51 10.8899 12.5 10.8899 11.61V7.51001C10.8899 7.10001 11.2299 6.76001 11.6399 6.76001C12.0499 6.76001 12.3899 7.10001 12.3899 7.51001V11.61C12.3899 11.97 12.6899 12.5 12.9999 12.68L16.0999 14.53C16.4599 14.74 16.5699 15.2 16.3599 15.56C16.2099 15.8 15.9599 15.93 15.7099 15.93Z"
          fill={primaryColorValue}
        />
      </svg>
    ),
  }[variant];
}

export default Timer;
