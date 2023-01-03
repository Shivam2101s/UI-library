import React from 'react';
import { Color, ColorsPallete } from '../../primitives';
import { IconTypes } from '../../primitives';

function ChevronTop({
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
        d="M5.47 14.47a.75.75 0 101.06 1.06l-1.06-1.06zM12 9l.53-.53a.75.75 0 00-1.06 0L12 9zm5.47 6.53a.75.75 0 101.06-1.06l-1.06 1.06zm-10.94 0l6-6-1.06-1.06-6 6 1.06 1.06zm4.94-6l6 6 1.06-1.06-6-6-1.06 1.06z"
      />
    </svg>
  );
}

export default ChevronTop;
