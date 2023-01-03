import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Trash({
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
        width="24"
        height="25"
        fill="none"
        viewBox="0 0 24 25"
      >
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 6.48c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 6.48M8.5 5.47l.22-1.31c.16-.95.28-1.66 1.97-1.66h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.64l-.65 10.07c-.11 1.57-.2 2.79-2.99 2.79H8.79c-2.79 0-2.88-1.22-2.99-2.79L5.15 9.64M10.33 17h3.33M9.5 13h5"
        />
      </svg>
    ),
    bulk: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5699 5.73C19.9599 5.57 18.3499 5.45 16.7299 5.36V5.35L16.5099 4.05C16.3599 3.13 16.1399 1.75 13.7999 1.75H11.1799C8.84991 1.75 8.62991 3.07 8.46991 4.04L8.25991 5.32C7.32991 5.38 6.39991 5.44 5.46991 5.53L3.42991 5.73C3.00991 5.77 2.70991 6.14 2.74991 6.55C2.78991 6.96 3.14991 7.26 3.56991 7.22L5.60991 7.02C10.8499 6.5 16.1299 6.7 21.4299 7.23C21.4599 7.23 21.4799 7.23 21.5099 7.23C21.8899 7.23 22.2199 6.94 22.2599 6.55C22.2899 6.14 21.9899 5.77 21.5699 5.73Z"
          fill={primaryColorValue}
        />
        <path
          opacity="0.3991"
          d="M19.73 8.64C19.49 8.39 19.16 8.25 18.82 8.25H6.17999C5.83999 8.25 5.49999 8.39 5.26999 8.64C5.03999 8.89 4.90999 9.23 4.92999 9.58L5.54999 19.84C5.65999 21.36 5.79999 23.26 9.28999 23.26H15.71C19.2 23.26 19.34 21.37 19.45 19.84L20.07 9.59C20.09 9.23 19.96 8.89 19.73 8.64Z"
          fill={secondaryColorValue}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0801 17.5C10.0801 17.0858 10.4159 16.75 10.8301 16.75H14.1601C14.5743 16.75 14.9101 17.0858 14.9101 17.5C14.9101 17.9142 14.5743 18.25 14.1601 18.25H10.8301C10.4159 18.25 10.0801 17.9142 10.0801 17.5Z"
          fill={secondaryColorValue}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 13.5C9.25 13.0858 9.58579 12.75 10 12.75H15C15.4142 12.75 15.75 13.0858 15.75 13.5C15.75 13.9142 15.4142 14.25 15 14.25H10C9.58579 14.25 9.25 13.9142 9.25 13.5Z"
          fill={secondaryColorValue}
        />
      </svg>
    ),
    twoTone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        viewBox="0 0 24 25"
      >
        <path
          stroke={secondaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 6.48c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 6.48"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.5 5.47l.22-1.31c.16-.95.28-1.66 1.97-1.66h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3"
          opacity="0.34"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.85 9.64l-.65 10.07c-.11 1.57-.2 2.79-2.99 2.79H8.79c-2.79 0-2.88-1.22-2.99-2.79L5.15 9.64"
        />
        <path
          stroke={primaryColorValue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.33 17h3.33M9.5 13h5"
          opacity="0.34"
        />
      </svg>
    ),
  }[variant];
}

export default Trash;
