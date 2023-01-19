import React from 'react';
import classNames from 'classnames';
import { BadgeVariants } from '../../primitives/BadgeTypes';
import s from './Badge.module.scss';
import { BadgeVariantsType } from '../../primitives';

type BadgeProps = {
  variant: BadgeVariantsType;
  label?: string;
  icon?: any;
  className?: string;
  isRectangle?: boolean;
};

export const Badge = ({
  variant = BadgeVariants.Success,
  label,
  icon,
  className,
  isRectangle = false,
}: BadgeProps) => (
  <div
    className={classNames(s.badge, s[variant], {
      [s.rounded]: !isRectangle,
      [`${className}`]: !!className,
    })}
  >
    {icon && <div>{icon}</div>}
    {icon && label && <div className={s.margin} />}
    {label && <div>{label}</div>}
  </div>
);
