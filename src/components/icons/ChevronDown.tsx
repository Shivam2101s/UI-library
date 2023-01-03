import React from 'react';
import { Color, ColorsPallete } from '../../primitives';
import { IconTypes } from '../../primitives';

function ChevronDown({
  primaryColor = Color.grey_80,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={primaryColorValue}
        d="M18.53 9.53a.75.75 0 00-1.06-1.06l1.06 1.06zM12 15l-.53.53a.75.75 0 001.06 0L12 15zM6.53 8.47a.75.75 0 00-1.06 1.06l1.06-1.06zm10.94 0l-6 6 1.06 1.06 6-6-1.06-1.06zm-4.94 6l-6-6-1.06 1.06 6 6 1.06-1.06z"
      />
    </svg>
  );
}

export default ChevronDown;
