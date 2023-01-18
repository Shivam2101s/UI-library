import React, { useState, useEffect } from 'react';
import { Color, ColorsPallete } from '../../primitives';
import Typography from '../Typography';
import s from './RangeSlider.module.scss';

export function RangeSlider({
  value,
  min,
  minLabel,
  maxLabel,
  max,
  step,
  onChange,
  fillColor = 'dark',
  valueColor = 'dark',
}: {
  value: number;
  onChange: (args: any) => void;
  min: number;
  minLabel: string;
  maxLabel: string;
  step: number;
  max: number;
  fillColor?: 'dark' | 'light';
  valueColor?: 'dark' | 'light';
}) {
  const [sliderVal, setSliderVal] = useState(value);
  const sliderRef = React.useRef();

  const [marginRight, setMarginRight] = React.useState('-32px');

  function updateStyle(sliderVal) {
    if (sliderRef && sliderRef.current) {
      // @ts-ignore
      sliderRef.current.style.width = `${
        //width
        ((sliderVal - min) / (max - min)) * 100
      }%`;
    }

    //here we are setting the style value "right" for our selected value
    if (((sliderVal - min) / (max - min)) * 100 <= 33) {
      //if "width" is less than and equal to 33, set right='32px'
      setMarginRight('-32px');
    }
    //if 'width' is greater than 33 and less than 66, than set right ='24px'
    if (
      ((sliderVal - min) / (max - min)) * 100 > 33 &&
      ((sliderVal - min) / (max - min)) * 100 <= 66
    ) {
      setMarginRight('-24px');
    }
    //if 'width' is greater than 66 and smaller than 100 set right='18px'
    if (
      ((sliderVal - min) / (max - min)) * 100 > 66 &&
      ((sliderVal - min) / (max - min)) * 100 <= 100
    ) {
      setMarginRight('-18px');
    }
  }

  const changeCallback = (e) => {
    setSliderVal(e.target.value);
    onChange(Number(e.target.value));
    updateStyle(e.target.value);
  };

  useEffect(() => {
    updateStyle(value);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.minLabelText}>
        <Typography variant="body_para_m" color="text_label" label={minLabel} />
      </div>
      <div className={s.root}>
        <input
          type="range"
          min={min}
          max={max}
          className={s.slider}
          value={sliderVal}
          onChange={changeCallback}
          step={step}
        />
        <div
          ref={sliderRef}
          style={{
            background: `${
              fillColor === 'dark'
                ? ColorsPallete.interaction_60
                : ColorsPallete.interaction_20
            }`,
          }}
          className={s.filled}
        >
          <span className={s.thumbText} style={{ right: `${marginRight}` }}>
            <Typography
              variant="body_para_b"
              label={`${value}`}
              color={
                valueColor === 'dark'
                  ? Color.interaction_80
                  : Color.interaction_50
              }
            />
          </span>
        </div>
      </div>
      <div className={s.maxLabelText}>
        <Typography variant="body_para_m" color="text_label" label={maxLabel} />
      </div>
    </div>
  );
}
