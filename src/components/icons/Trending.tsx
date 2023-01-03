import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Trending({
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
          fill={primaryColorValue}
          d="M3.451 17.488a.75.75 0 001.098 1.024L3.45 17.488zM20.75 6.974a.75.75 0 00-.776-.724l-6.746.236a.75.75 0 10.052 1.5l5.997-.21.21 5.996a.75.75 0 001.498-.052l-.235-6.746zm-7.403 7.162l-.549-.512.549.512zm-8.798 4.376l5.012-5.376-1.097-1.023-5.013 5.375 1.098 1.024zm5.377-5.376l1.41 1.511 1.096-1.023-1.409-1.511-1.097 1.023zm3.97 1.511l6.652-7.136-1.096-1.022-6.654 7.135 1.097 1.023zm-2.56 0a1.75 1.75 0 002.56 0l-1.098-1.023a.25.25 0 01-.366 0l-1.097 1.023zM9.56 13.136a.25.25 0 01.365 0l1.098-1.023a1.75 1.75 0 00-2.56 0l1.097 1.023z"
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
          fill={primaryColorValue}
          d="M3.451 17.488a.75.75 0 001.098 1.024L3.45 17.488zM20.75 6.974a.75.75 0 00-.776-.724l-6.746.236a.75.75 0 10.052 1.5l5.997-.21.21 5.996a.75.75 0 001.498-.052l-.235-6.746zm-7.403 7.162l-.549-.512.549.512zm-8.798 4.376l5.012-5.376-1.097-1.023-5.013 5.375 1.098 1.024zm5.377-5.376l1.41 1.511 1.096-1.023-1.409-1.511-1.097 1.023zm3.97 1.511l6.652-7.136-1.096-1.022-6.654 7.135 1.097 1.023zm-2.56 0a1.75 1.75 0 002.56 0l-1.098-1.023a.25.25 0 01-.366 0l-1.097 1.023zM9.56 13.136a.25.25 0 01.365 0l1.098-1.023a1.75 1.75 0 00-2.56 0l1.097 1.023z"
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
          d="M3.451 17.488a.75.75 0 001.098 1.024L3.45 17.488zM20.75 6.974a.75.75 0 00-.776-.724l-6.746.236a.75.75 0 10.052 1.5l5.997-.21.21 5.996a.75.75 0 001.498-.052l-.235-6.746zm-7.403 7.162l-.549-.512.549.512zm-8.798 4.376l5.012-5.376-1.097-1.023-5.013 5.375 1.098 1.024zm5.377-5.376l1.41 1.511 1.096-1.023-1.409-1.511-1.097 1.023zm3.97 1.511l6.652-7.136-1.096-1.022-6.654 7.135 1.097 1.023zm-2.56 0a1.75 1.75 0 002.56 0l-1.098-1.023a.25.25 0 01-.366 0l-1.097 1.023zM9.56 13.136a.25.25 0 01.365 0l1.098-1.023a1.75 1.75 0 00-2.56 0l1.097 1.023z"
        />
      </svg>
    ),
  }[variant];
}

export default Trending;
