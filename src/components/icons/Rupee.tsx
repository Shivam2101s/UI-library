import React from 'react';
import { Color, ColorsPallete } from '../../primitives';
import { IconTypes } from '../../primitives/IconTypes';

function Rupee({
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
        d="M6.39 3.405a.75.75 0 000 1.5v-1.5zm.584 10.348l.564-.494-.564.494zm5.103 6.972a.75.75 0 101.129-.988l-1.129.988zM18 4.905a.75.75 0 000-1.5v1.5zM6.39 7.871a.75.75 0 100 1.5v-1.5zM18 9.37a.75.75 0 000-1.5v1.5zM6.39 4.905h4.465v-1.5H6.39v1.5zm4.465 7.431H7.276v1.5h3.58v-1.5zM6.41 14.247l5.668 6.478 1.129-.988-5.668-6.478-1.129.988zm4.446-9.342H18v-1.5h-7.145v1.5zM6.39 9.371h8.93v-1.5H6.39v1.5zm8.93 0H18v-1.5h-2.68v1.5zm-8.044 2.965c-.99 0-1.519 1.166-.867 1.911l1.129-.988a.348.348 0 01-.262.577v-1.5zm7.295-3.715a3.715 3.715 0 01-3.716 3.715v1.5a5.215 5.215 0 005.216-5.215h-1.5zm-3.716-3.716a3.715 3.715 0 013.716 3.716h1.5a5.215 5.215 0 00-5.216-5.216v1.5z"
      />
    </svg>
  );
}

export default Rupee;
