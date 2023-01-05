import React from 'react';
import { IconTypes } from '../../primitives/IconTypes';
import { Color, ColorsPallete } from '../../primitives';

function Heart({
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
          d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"
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
          d="M22 8.69c0 1.19-.19 2.29-.52 3.31H2.52C2.19 10.98 2 9.88 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 014.44-2.23C19.51 3.1 22 5.6 22 8.69z"
        />
        <path
          fill={secondaryColorValue}
          d="M21.48 12c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12h18.96z"
          opacity="0.4"
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
          d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"
        />
      </svg>
    ),
    custom: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.62 18.8096C11.28 18.9296 10.72 18.9296 10.38 18.8096C7.48 17.8196 1 13.6896 1 6.68961C1 3.59961 3.49 1.09961 6.56 1.09961C8.38 1.09961 9.99 1.97961 11 3.33961C12.01 1.97961 13.63 1.09961 15.44 1.09961C18.51 1.09961 21 3.59961 21 6.68961C21 13.6896 14.52 17.8196 11.62 18.8096Z"
          fill="url(#paint0_linear_5988_15764)"
          stroke="url(#paint1_linear_5988_15764)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5988_15764"
            x1="15.2714"
            y1="1.12574"
            x2="15.3406"
            y2="18.8693"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1ADFA" />
            <stop offset="1" stopColor="#FCB4B4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_5988_15764"
            x1="15.2714"
            y1="1.12574"
            x2="15.3406"
            y2="18.8693"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1ADFA" />
            <stop offset="1" stopColor="#FCB4B4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  }[variant];
}

export default Heart;
