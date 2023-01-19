/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IndicatorType } from '../../../primitives/ProgressIndicatorTypes';
import s from './Tabbed.module.scss';

export const Tabbed = ({ noOfSteps, currentStep }: IndicatorType) => (
  <div className={s.tabbed}>
    {new Array(noOfSteps)?.fill(1)?.map((item, idx) => (
      <div className={s.progress_bar} key={idx}>
        <div
          className={s.loader}
          style={currentStep > idx ? { width: '100%' } : { width: '0%' }}
        />
      </div>
    ))}
  </div>
);
