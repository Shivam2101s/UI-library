import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function InfoCircle({
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
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM12 16v-5"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.005 8h-.009"
        />
      </svg>
    ),
    bulk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
          fill={primaryColorValue}
        />
        <path
          d="M8 9.16668C8.27333 9.16668 8.5 8.94001 8.5 8.66668V5.33334C8.5 5.06001 8.27333 4.83334 8 4.83334C7.72667 4.83334 7.5 5.06001 7.5 5.33334V8.66668C7.5 8.94001 7.72667 9.16668 8 9.16668Z"
          fill="white"
        />
        <path
          d="M8.61334 10.4133C8.58001 10.3333 8.53334 10.26 8.47334 10.1933C8.40668 10.1333 8.33334 10.0867 8.25334 10.0533C8.09334 9.98666 7.90668 9.98666 7.74668 10.0533C7.66668 10.0867 7.59334 10.1333 7.52668 10.1933C7.46668 10.26 7.42001 10.3333 7.38668 10.4133C7.35334 10.4933 7.33334 10.58 7.33334 10.6667C7.33334 10.7533 7.35334 10.84 7.38668 10.92C7.42001 11.0067 7.46668 11.0733 7.52668 11.14C7.59334 11.2 7.66668 11.2467 7.74668 11.28C7.82668 11.3133 7.91334 11.3333 8.00001 11.3333C8.08668 11.3333 8.17334 11.3133 8.25334 11.28C8.33334 11.2467 8.40668 11.2 8.47334 11.14C8.53334 11.0733 8.58001 11.0067 8.61334 10.92C8.64668 10.84 8.66668 10.7533 8.66668 10.6667C8.66668 10.58 8.64668 10.4933 8.61334 10.4133Z"
          fill="white"
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
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 16v-5"
          opacity="0.34"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.005 8h-.009"
          opacity="0.34"
        />
      </svg>
    ),
  }[variant];
}

export default InfoCircle;
