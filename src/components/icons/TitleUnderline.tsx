import React from 'react';

interface IconTypes {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

function TitleUnderline({
  primaryColor = '#FDEBBD',
  secondaryColor = '#F9E6B6',
  width = 228,
  height = 13,
}: IconTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 228 13"
    >
      <path
        fill={primaryColor}
        d="M4.08 1.69C4.08 3.42 1.936 6.25.89 6.25c1.045 0 3.19 2.672 3.19 4.559 0-1.887 1.817-4.559 3.192-4.559-1.43 0-3.191-2.83-3.191-4.559z"
        opacity="0.9"
      />
      <path stroke={secondaryColor} d="M9.272 5.749L99.272 5.749" />
      <path
        fill={primaryColor}
        d="M104.463 1.69c0 1.73-2.146 4.559-3.191 4.559 1.045 0 3.191 2.672 3.191 4.559 0-1.887 1.816-4.559 3.191-4.559-1.43 0-3.191-2.83-3.191-4.559zM114 .041c0 2.355-2.922 6.208-4.346 6.208 1.424 0 4.346 3.64 4.346 6.208 0-2.569 2.472-6.208 4.346-6.208-1.948 0-4.346-3.853-4.346-6.208zM123.537 1.69c0 1.73-2.146 4.559-3.191 4.559 1.045 0 3.191 2.672 3.191 4.559 0-1.887 1.815-4.559 3.191-4.559-1.431 0-3.191-2.83-3.191-4.559z"
        opacity="0.9"
      />
      <path stroke={secondaryColor} d="M128.728 5.749L218.728 5.749" />
      <path
        fill={primaryColor}
        d="M223.919 1.69c0 1.73-2.146 4.559-3.191 4.559 1.045 0 3.191 2.672 3.191 4.559 0-1.887 1.816-4.559 3.191-4.559-1.43 0-3.191-2.83-3.191-4.559z"
        opacity="0.9"
      />
    </svg>
  );
}

export default TitleUnderline;
