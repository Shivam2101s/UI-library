import React from 'react';
import { Color, ColorsPallete } from '../../primitives';
import { IconTypes } from '../../primitives';

function Hamburger({
  primaryColor = Color.grey_80,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill={primaryColorValue} clipPath="url(#clip0_15080_59547)">
        <rect width="16" height="2.4" x="4" y="6.5" rx="1.2" />
        <rect width="16" height="2.4" x="4" y="11.3" rx="1.2" />
        <rect width="16" height="2.4" x="4" y="16.1" rx="1.2" />
      </g>
      <defs>
        <clipPath id="clip0_15080_59547">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Hamburger;
