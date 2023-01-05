import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Bulb({
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
          strokeWidth="1.333"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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
          strokeWidth="1.333"
          d="M9.663 17h4.673m-5.872-1.465a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.468V19a2 2 0 01-4 0v-.53c0-.896-.356-1.755-.988-2.387l-.548-.547z"
        />
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.333"
          d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707"
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
          d="M7.096 13.006a5 5 0 001.368 2.56l.548.547c.236.237.434.505.59.795h4.797c.156-.292.354-.56.589-.795l.548-.547a5 5 0 10-8.44-2.56z"
        />
        <path
          fill={primaryColorValue}
          d="M14 18.438c0-.443.087-.882.257-1.291l.08-.178H9.662c.112.135.337.619.337 1.469v.53a2 2 0 004 0v-.53z"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.333"
          d="M12 3.031v1m6.364 1.636l-.707.707M21 12.031h-1m-16 0H3m3.343-5.657l-.707-.707"
        />
      </svg>
    ),
  }[variant];
}

export default Bulb;
