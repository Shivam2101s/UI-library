/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IndicatorType } from '../../../primitives/ProgressIndicatorTypes';
import s from './ProgressDots.module.scss';

function calcWidth({ noOfSteps, currentStep }: IndicatorType) {
  if (noOfSteps === 0 || currentStep > noOfSteps) {
    return '100%';
  } else if (currentStep <= 1) {
    return '0%';
  } else return `${(currentStep / noOfSteps) * 100 - 20}%`;
}

export const ProgressDots = ({ noOfSteps, currentStep }: IndicatorType) => (
  <div className={s.progress_dots}>
    <div className={s.progress_bar}>
      <div
        className={s.loader}
        style={{ width: calcWidth({ noOfSteps, currentStep }) }}
      />
      <div className={s.dots}>
        {new Array(noOfSteps)?.fill(1).map((item, idx) => (
          <div
            key={idx}
            style={
              Math.floor(currentStep) > idx
                ? { opacity: '1' }
                : { opacity: '0.2' }
            }
          />
        ))}
      </div>
    </div>
  </div>
);
