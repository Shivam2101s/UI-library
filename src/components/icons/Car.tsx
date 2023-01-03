import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Car({
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
          strokeWidth="1.5"
          d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76zM21.99 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09zM4 8H3M21 8h-1M12 3v2M10.5 5h3M6 15h3M15 15h3"
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
          d="M22.18 13.66c-.15-1.65-.59-3.41-3.8-3.41H5.62c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09.53.58 1.28.91 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.51 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09l-.56-6.09z"
          opacity="0.4"
        />
        <path
          fill={primaryColorValue}
          d="M21 7.25h-1.02l-.38-1.81c-.36-1.75-1.11-3.36-4.09-3.36H8.49c-2.98 0-3.73 1.61-4.09 3.36l-.38 1.81H3c-.41 0-.75.34-.75.75s.34.75.75.75h.71l-.42 2c.54-.31 1.29-.5 2.33-.5h12.76c1.04 0 1.79.19 2.33.5l-.42-2H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM9 15.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM18 15.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"
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
          strokeWidth="1.5"
          d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76zM21.99 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09zM4 8H3M21 8h-1"
        />
        <g
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          opacity="0.4"
        >
          <path d="M12 3v2M10.5 5h3" />
        </g>
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 15h3M15 15h3"
          opacity="0.4"
        />
      </svg>
    ),
  }[variant];
}

export default Car;
