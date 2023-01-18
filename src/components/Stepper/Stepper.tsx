import * as React from 'react';
import cn from 'classnames';
import s from './Stepper.module.scss';

interface StepperProps {
  count: number;
  min?: number;
  max?: number;
  step?: number;
  onChange(args: number): void;
}

const Stepper: React.FunctionComponent<StepperProps> = ({
  count = 0,
  min = 0,
  max = 10,
  step = 1,
  onChange,
}) => (
  <div className={s.root}>
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onChange(count - step);
      }}
      disabled={count - step < min}
      className={cn(s.btn, {
        [s.disabled]: count - step < min,
      })}
    >
      -
    </button>
    <span className={s.text}>{count}</span>
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onChange(count + step);
      }}
      disabled={count + step > max}
      className={cn(s.btn, {
        [s.disabled]: count + step > max,
      })}
    >
      +
    </button>
  </div>
);

export default Stepper;
