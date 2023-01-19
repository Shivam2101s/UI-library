import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function TickLinear({
  variant = 'linear',
  primaryColor = Color.grey_70,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  {/* @ts-ignore */}
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
          fill={primaryColorValue}
          d="M4.575 13.427a.75.75 0 00-1.15.964l1.15-.964zM8.267 19l-.575.482a.75.75 0 001.15 0L8.266 19zM20.575 5.482a.75.75 0 10-1.15-.964l1.15.964zM3.425 14.39l4.267 5.09 1.15-.963-4.267-5.09-1.15.963zm5.416 5.09l11.734-14-1.15-.963-11.733 14 1.15.964z"
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
        <circle
          cx="12"
          cy="12"
          r="9.25"
          stroke={primaryColorValue}
          strokeWidth="1.5"
        />
        <path
          fill={primaryColorValue}
          d="M8.578 11.523a.75.75 0 10-1.156.955l1.156-.955zm1.9 3.478l-.578.477a.75.75 0 001.13.03l-.552-.507zm6.074-5.493a.75.75 0 10-1.104-1.016l1.104 1.016zm-9.13 2.97l2.478 3 1.157-.955-2.479-3-1.156.955zm3.608 3.03l5.522-6-1.104-1.016-5.521 6 1.103 1.016z"
        />
      </svg>
    ),
  }[variant];
}

export default TickLinear;
