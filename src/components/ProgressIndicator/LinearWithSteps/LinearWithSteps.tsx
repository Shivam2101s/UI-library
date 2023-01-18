import React from 'react';
import { IndicatorType } from '../../../primitives/ProgressIndicatorTypes';
import Typography from '../../Typography';
import s from './LinearWithSteps.module.scss';

function calcWidth(noOfSteps:number, currentStep:number) {
  if (noOfSteps === 0 || currentStep > noOfSteps) {
    return '100%';
  } else if (currentStep <= 1) {
    return '0%';
  } else return `${((currentStep - 1) / (noOfSteps - 1)) * 100}%`;
}
export const LinearWithSteps = ({
  noOfSteps,
  currentStep,
  steps,
}: IndicatorType) => (
  <div className={s.wrapper}>
    <div className={s.progress}>
      <div
        className={s.progress_done}
        style={{ width: calcWidth(noOfSteps, currentStep), opacity: 1 }}
      />
      <div className={s.dots}>
        {steps?.length &&
          steps?.map((item, idx) => (
            <div
              style={
                currentStep > idx
                  ? { backgroundColor: '#3341FF' }
                  : { background: '#e2e2e2' }
              }
              className={currentStep > idx ? s.active : ''}
              key={item?.key}
            />
          ))}
      </div>
      <div className={s.steps_wrapper}>
        {steps?.length &&
          steps?.map((item) => (
            <div key={item?.label}>
              <Typography
                renderAs="P"
                label={item?.label}
                color="text_default"
                variant="small_m"
              />
            </div>
          ))}
      </div>
    </div>
  </div>
);
