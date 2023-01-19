import React from 'react';
import { Color } from '../../../primitives';
import { IndicatorType } from '../../../primitives/ProgressIndicatorTypes';
import TickLinear from '../../icons/Tick';
import Typography from '../../Typography';
import s from './LinearWithIndex.module.scss';

function calcWidth(noOfSteps:number, currentStep:number) {
  if (noOfSteps === 0 || currentStep > noOfSteps) {
    return '100%';
  } else if (currentStep <= 1) {
    return '0%';
  } else return `${((currentStep - 1) / (noOfSteps - 1)) * 100}%`;
}
export const LinearWithIndex = ({
  noOfSteps,
  currentStep,
  steps,
  horizontalMargin,
}: IndicatorType) => (
  <div className={s.root}>
    <div
      className={s.wrapper}
      style={{ paddingLeft: horizontalMargin, paddingRight: horizontalMargin }}
    >
      <div className={s.progress}>
        <div
          className={s.progress_done}
          style={{ width: calcWidth(noOfSteps, currentStep), opacity: 1 }}
        />
        <div className={s.dots}>
          {steps?.length &&
            steps?.map((item, idx) => (
              <div
                className={currentStep > idx ? s.active : s.unactive}
                key={item?.key}
              >
                {currentStep > idx ? (
                  //@ts-ignore 
                  <TickLinear
                    variant="linear"
                    primaryColor={Color.grey_white}
                    width={12}
                    height={12}
                    secondaryColor={Color.grey_white}
                  />
                ) : (
                  idx + 1
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
    <div className={s.steps_wrapper}>
      {steps?.length &&
        steps?.map((item) => (
          <div key={item?.label}>
            {/* @ts-ignore */}
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
);
