import React from 'react';
import { Color, ColorsPallete } from '../../primitives';
import { IconTypes } from '../../primitives';

function ChevronLeft({
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
        d="M14.47 18.53a.75.75 0 101.06-1.06l-1.06 1.06zM9 12l-.53-.53a.75.75 0 000 1.06L9 12zm6.53-5.47a.75.75 0 00-1.06-1.06l1.06 1.06zm0 10.94l-6-6-1.06 1.06 6 6 1.06-1.06zm-6-4.94l6-6-1.06-1.06-6 6 1.06 1.06z"
      />
    </svg>
  );
}

export default ChevronLeft;
