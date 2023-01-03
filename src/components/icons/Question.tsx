import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Question({
  variant = 'linear',
  primaryColor = Color.grey_80,
  secondaryColor = Color.grey_40,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
  const secondaryColorValue = ColorsPallete[secondaryColor];
  return {
    bulk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" fill={secondaryColorValue} />
        <path
          fill={primaryColorValue}
          d="M8.731 8.675a.75.75 0 001.485.212l-1.485-.212zm4.611-2.657l-.237.711.237-.711zm0 5.526l-.45-.6.45.6zm-1.635 3.293a.75.75 0 001.06-1.06l-1.06 1.06zm-1.49-5.95c.078-.55.338-1.294.807-1.784.225-.235.488-.402.8-.48.313-.077.73-.078 1.281.106l.474-1.423c-.774-.258-1.482-.295-2.114-.139a3.14 3.14 0 00-1.525.899c-.756.79-1.103 1.869-1.209 2.609l1.485.212zm2.888-2.158c.747.25 1.145.889 1.145 1.706 0 .835-.432 1.814-1.358 2.508l.9 1.2c1.285-.963 1.958-2.378 1.958-3.708 0-1.346-.707-2.64-2.17-3.129l-.475 1.423zm-.213 4.215c-.967.725-1.485 1.465-1.637 2.185-.155.73.09 1.347.452 1.708l1.06-1.06-.005-.007a.284.284 0 01-.038-.08.504.504 0 01-.002-.25c.05-.238.27-.696 1.07-1.296l-.9-1.2z"
        />
        <circle cx="12.237" cy="17.069" r="1.105" fill={primaryColorValue} />
      </svg>
    ),
  }[variant];
}

export default Question;
