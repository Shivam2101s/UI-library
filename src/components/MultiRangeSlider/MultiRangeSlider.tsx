import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { Color } from '.././../primitives';
import Typography from '../Typography';
import s from './multiRangeSlider.module.scss';
import { formatPriceAndNumber } from '../../utils';

//For step to work properly (stop - start)/step must be an integer
interface MultiRangeSliderProps {
  onChange: ({ min, max }: any) => void;
  step?: number;
  start: number;
  stop: number;
  isCurrency?: boolean;
  minMaxVisible?: boolean;
  currentMin?: number;
  currentMax?: number;
  isCompact?: boolean;
  theme?: 'dark' | 'light';
}

export function MultiRangeSlider({
  start,
  stop,
  onChange,
  step,
  isCurrency = false,
  minMaxVisible = true,
  theme = 'dark',
  currentMin,
  isCompact = false,
  currentMax,
}: MultiRangeSliderProps) {
  const [min, setMin] = useState(currentMin || start);
  const [max, setMax] = useState(currentMax || stop);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxRef.current) {
      const minPercent = getPercent(min);
      const maxPercent = getPercent(+maxRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [min, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minRef.current) {
      const minPercent = getPercent(+minRef.current.value);
      const maxPercent = getPercent(max);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [max, getPercent]);
  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: min, max: max });
  }, [min, max]);

  const rangeDiff = stop - start;
  const thumb1Distance = ((min - start) / rangeDiff) * 100;
  const thumb2Distance = ((max - start) / rangeDiff) * 100;
  const width = ((max - min) / rangeDiff) * 100;

  function handleLabel(value:any) {
    if (isCurrency || isCompact) {
      return formatPriceAndNumber(
        value,
        isCompact ? 'compact' : null,
        isCurrency ? 'currency' : null
      );
    }
    return value;
  }

  return (
    <div className={s.container}>
      <input
        type="range"
        min={start}
        max={stop}
        value={min}
        step={step}
        ref={minRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, +max - +step);
          setMin(value);
          event.target.value = value.toString();
        }}
        className={cn(
          s.thumb,
          s.thumb__zindex_3,
          `${min > max - 100 ? s.thumb__zindex_5 : ''}`
        )}
      />
      <input
        type="range"
        min={start}
        max={stop}
        value={max}
        step={step}
        ref={maxRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, +min + +step);
          setMax(value);
          event.target.value = value.toString();
        }}
        className={cn(s.thumb, s.thumb__zindex_4)}
      />
      <div className={s.slider}>
        <div className={s.track} />
        <div className={s.dynamic_value}>
          <div
            className={s.top_left}
            style={
              thumb1Distance > 50
                ? {
                    left: `calc(${thumb1Distance}% - 15px)`,
                  }
                : {
                    left: `calc(${thumb1Distance}% - 0px)`,
                  }
            }
          >
            {minMaxVisible && ( //for minMax visible
              <Typography
                label={handleLabel(min)}
                variant="body_para_b"
                color={
                  theme === 'dark' ? Color.interaction_80 : Color.grey_white
                }
              />
            )}
          </div>
          <div
            className={s.top_right}
            style={
              thumb2Distance > 50
                ? {
                    left: `calc(${thumb2Distance}% - 25px)`,
                  }
                : {
                    left: `calc(${thumb2Distance}% - 10px)`,
                  }
            }
          >
            {minMaxVisible && ( //for minMax visible
              <Typography
                label={handleLabel(max)}
                variant="body_para_b"
                color={
                  theme === 'dark' ? Color.interaction_80 : Color.grey_white
                }
              />
            )}
          </div>
        </div>
        <div ref={range} className={s.range}>
          <span
            className={cn(s.slider_range_span, {
              [s.slider_range_light]: theme === 'light',
            })}
            style={{
              width: `${width}%`,
              marginLeft: `${thumb1Distance}%`,
            }}
          />
        </div>
        <div className={s.static_value}>
          <div className={s.left_value}>
            <Typography
              label={handleLabel(start)}
              variant="body_para_m"
              color={
                theme === 'dark' ? Color.text_label : Color.text_placeholder
              }
            />
          </div>
          <div className={s.right_value}>
            <Typography
              label={handleLabel(stop)}
              variant="body_para_m"
              color={
                theme === 'dark' ? Color.text_label : Color.text_placeholder
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
