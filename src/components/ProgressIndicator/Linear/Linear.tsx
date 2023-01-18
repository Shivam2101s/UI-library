import React from 'react';
import { ColorsPallete } from '../../../primitives';
import { IndicatorType } from '../../../primitives/ProgressIndicatorTypes';
import s from './Linear.module.scss';

function calcWidth(noOfSteps:any, currentStep:any) {
  if (noOfSteps === 0 || currentStep > noOfSteps) {
    return '100%';
  } else if (currentStep <= 0) {
    return '0%';
  } else return `${(currentStep / noOfSteps) * 100}%`;
}

export const Linear = ({ noOfSteps, currentStep, color }: IndicatorType) => (
  <div className={s.progress}>
    {console.log('COL', color)}
    <div
      className={s.progress_done}
      style={{
        width: calcWidth(noOfSteps, currentStep),
        opacity: 1,
        background: ColorsPallete[color],
      }}
    />
  </div>
);
