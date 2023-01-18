import React from 'react';
import { ProgressIndicatorType } from '../../primitives/ProgressIndicatorTypes';
import Linear from './Linear';
import LinearWithIndex from './LinearWithIndex';
import LinearWithSteps from './LinearWithSteps';
import ProgressDots from './ProgressDots';
import s from './ProgressIndicator.module.scss';
import Tabbed from './Tabbed';

export const ProgressIndicator = ({
  noOfSteps,
  currentStep,
  variant,
  steps,
  horizontalMargin,
  color = 'interaction_60',
}: ProgressIndicatorType) => (
  <div className={s.container}>
    {variant === 'linear' && (
      <Linear noOfSteps={noOfSteps} currentStep={currentStep} color={color} />
    )}
    {variant === 'linearWithSteps' && (
      <LinearWithSteps
        noOfSteps={noOfSteps}
        currentStep={currentStep}
        steps={steps}
      />
    )}
    {variant === 'linearWithIndex' && (
      <LinearWithIndex
        noOfSteps={noOfSteps}
        currentStep={currentStep}
        steps={steps}
        horizontalMargin={horizontalMargin}
      />
    )}
    {variant === 'tabbed' && (
      <Tabbed noOfSteps={noOfSteps} currentStep={currentStep} />
    )}
    {variant === 'progressDots' && (
      <ProgressDots noOfSteps={noOfSteps} currentStep={currentStep} />
    )}
  </div>
);
