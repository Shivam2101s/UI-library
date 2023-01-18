import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './PulseSlider.module.scss';

type sliderProps = {
  getSliderValue: (value: number) => void;
};

export const PulseSlider = ({ getSliderValue }: sliderProps) => {
  const [sliderVal, setSliderVal] = useState(1);
  const [thumbVal, setThumbVal] = useState(1);
  const sliderRef = React.useRef();

  const handleMove = (e) => {
    // @ts-ignore
    sliderRef.current.style.marginLeft = `${e.target.value * 10}%`;
    setThumbVal(e.target.value);
    setSliderVal(Math.round(e.target.value));
    getSliderValue(Math.round(e.target.value));
  };

  useEffect(() => {
    // @ts-ignore
    sliderRef.current.style.marginLeft = `${Math.round(1) * 10}%`;
  }, []);

  return (
    <div className={s.container}>
      <div className={s.value_div} ref={sliderRef}>
        <h3
          className={cn({
            [s.value_red]: sliderVal <= 6,
            [s.value_yellow]: sliderVal === 7 || sliderVal === 8,
            [s.value_green]: sliderVal >= 9,
          })}
        >
          {sliderVal}
        </h3>
      </div>
      <img className={s.slider} src="https://d1wsfdvq5y3rer.cloudfront.net/production/team/public/FS_20230118120116674645.png" alt="" />
      <input
        type="range"
        min={1}
        max={10}
        className={s.input}
        step={0.2}
        defaultValue={1}
        value={thumbVal}
        onChange={(val) => handleMove(val)}
      />
    </div>
  );
};
