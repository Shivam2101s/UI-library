import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Share({
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
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.6 13.842v3.16l6.4-5.399-6.4-5.38v3.07c-6.22.776-8.7 4.621-9.6 8.485 2.22-2.708 5.16-3.936 9.6-3.936z"
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
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.6 13.842v3.16l6.4-5.399-6.4-5.38v3.07c-6.22.776-8.7 4.621-9.6 8.485 2.22-2.708 5.16-3.936 9.6-3.936z"
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
          d="M13.6 13.842v3.16l6.4-5.399-6.4-5.38v3.07c-6.22.776-8.7 4.621-9.6 8.485 2.22-2.708 5.16-3.936 9.6-3.936z"
        />
      </svg>
    ),
  }[variant];
}

export default Share;
