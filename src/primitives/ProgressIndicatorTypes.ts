export type StepType = {
  key: number;
  label?: string;
};

export type ProgressIndicatorType = {
  noOfSteps: number;
  currentStep: number;
  variant:
    | 'linear'
    | 'linearWithSteps'
    | 'tabbed'
    | 'progressDots'
    | 'linearWithIndex';
  steps?: StepType[];
  horizontalMargin?: number;
};

export type IndicatorType = {
  noOfSteps: number;
  currentStep: number;
  steps?: StepType[];
  horizontalMargin?: number;
};

export type BreadCrumb = {
  name: string;
  url: string;
  type: 'internal' | 'external';
  id: number;
};
