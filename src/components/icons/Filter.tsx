import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Filter({
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
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2 3.40741C2 3.40741 4.85714 2 12 2C19.1429 2 22 3.40741 22 3.40741L14.1429 12.5556V18.8889L9.85714 21V12.5556L2 3.40741Z"
          stroke={primaryColorValue}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    twoTone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2c-4.533 0-7.34.567-8.786.981-.628.18-.8.91-.374 1.405l6.604 7.689a1 1 0 001.024.312l4.737-1.306a1 1 0 00.494-.313l5.464-6.382c.424-.496.253-1.225-.375-1.404C19.343 2.567 16.535 2 12 2zM14.143 19.267V14.8a1 1 0 00-1.215-.977l-2.286.504a1 1 0 00-.785.977v5.089a1 1 0 001.442.897l2.286-1.126a1 1 0 00.558-.897z"
        />
      </svg>
    ),
    bulk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill={secondaryColorValue}
          d="M12 2c-4.533 0-7.34.567-8.786.981-.628.18-.8.91-.374 1.405l6.604 7.689a1 1 0 001.024.312l4.737-1.306a1 1 0 00.494-.313l5.464-6.382c.424-.496.253-1.225-.375-1.404C19.343 2.567 16.535 2 12 2z"
        />
        <path
          fill={primaryColorValue}
          d="M14.143 18.267V13.8a1 1 0 00-1.215-.977l-2.286.504a1 1 0 00-.785.977v5.089a1 1 0 001.442.897l2.286-1.126a1 1 0 00.558-.897z"
        />
      </svg>
    )
  }[variant];
}

export default Filter;
