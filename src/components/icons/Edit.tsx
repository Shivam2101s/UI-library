import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Edit({
  variant = 'linear',
  primaryColor = Color.grey_70,
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
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M13.656 4.512l-9.34 9.34c-.37.37-.712 1.055-.791 1.557l-.502 3.562c-.184 1.293.713 2.19 2.006 2.005l3.562-.501c.5-.08 1.213-.423 1.556-.792l9.34-9.34c1.61-1.61 2.375-3.483 0-5.858-2.348-2.348-4.221-1.583-5.83.027zM12.311 5.857a8.404 8.404 0 005.858 5.858"
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
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M13.656 4.512l-9.34 9.34c-.37.37-.712 1.055-.791 1.557l-.502 3.562c-.184 1.293.713 2.19 2.006 2.005l3.562-.501c.5-.08 1.213-.423 1.556-.792l9.34-9.34c1.61-1.61 2.375-3.483 0-5.858-2.348-2.348-4.221-1.583-5.83.027z"
        />
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12.311 5.857a8.404 8.404 0 005.858 5.858"
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
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M13.656 4.512l-9.34 9.34c-.37.37-.712 1.055-.791 1.557l-.502 3.562c-.184 1.293.713 2.19 2.006 2.005l3.562-.501c.5-.08 1.213-.423 1.556-.792l9.34-9.34c1.61-1.61 2.375-3.483 0-5.858-2.348-2.348-4.221-1.583-5.83.027z"
        />
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M12.311 5.857a8.404 8.404 0 005.858 5.858"
        />
      </svg>
    ),
  }[variant];
}

export default Edit;
