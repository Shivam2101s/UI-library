import React from 'react';
import s from './Shadown.module.scss';

export const Shadow = () => (
  <div className={s.root}>
    <div className={s.low}>low</div>
    <div className={s.medium}>medium</div>
    <div className={s.high}>high</div>
    <div className={s.highUp}>highUp</div>
  </div>
);
