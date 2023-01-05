import React from 'react';
import s from './CornerRadius.module.scss';

export const CornerRadius = () => (
  <div className={s.root}>
    <div className={s.low}>sharp</div>
    <div className={s.medium}>s</div>
    <div className={s.high}>base</div>
    <div className={s.highUp}>l</div>
  </div>
);
