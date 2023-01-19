import React from 'react';
import classNames from 'classnames';
import s from './Divider.module.scss';

type DividerProps = {
  className?: string;
  variant?: 'empty' | 'padded' | 'full' | 'with_margin' | 'dotted';
};

export const Divider = ({ variant = 'full', className }: DividerProps) => (
  <div
    className={classNames({ [s[variant]]: true, [`${className}`]: !!className })}
  />
);
