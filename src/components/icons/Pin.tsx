import React from 'react';
import { IconTypes } from '../../primitives';
import { ColorsPallete, Color } from '../../primitives';

function Pin({
  variant = 'linear',
  primaryColor = Color.grey_80,
  width = 24,
  height = 24,
}: IconTypes) {
  const primaryColorValue = ColorsPallete[primaryColor];
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
          d="M22.19 9a1.493 1.493 0 00-.44-1.06l-5.69-5.69a1.51 1.51 0 00-2.12 0L8.439 7.753c-1.004-.31-3.282-.694-5.663 1.228a1.49 1.49 0 00-.122 2.231l4.538 4.538-3.225 3.215a.76.76 0 000 1.069.769.769 0 001.068 0l3.216-3.225 4.519 4.519c.281.28.662.439 1.06.44h.102a1.528 1.528 0 001.097-.6c1.838-2.447 1.66-4.434 1.238-5.625l5.484-5.484a1.491 1.491 0 00.44-1.06zm-7.35 5.84a.768.768 0 00-.14.872c.89 1.772-.169 3.619-.872 4.556L3.713 10.153C4.847 9.234 5.934 9 6.759 9c.825 0 1.491.272 1.529.3a.769.769 0 00.871-.141L15 3.309l5.69 5.69-5.85 5.841z"
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
          d="M21.75 10.059l-5.484 5.484c.422 1.191.6 3.178-1.238 5.625a1.528 1.528 0 01-1.097.6h-.103a1.51 1.51 0 01-1.06-.44L8.25 16.809l-3.216 3.225a.769.769 0 01-1.068 0 .76.76 0 010-1.069L7.19 15.75l-4.538-4.538a1.491 1.491 0 01.122-2.231c2.381-1.922 4.66-1.538 5.663-1.228L13.94 2.25a1.51 1.51 0 012.118 0l5.691 5.69a1.49 1.49 0 010 2.119z"
        />
      </svg>
    ),
  }[variant];
}

export default Pin;
