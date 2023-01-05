import React from 'react';
import classNames from 'classnames';
import { ChipVariants } from '../../primitives/ChipTypes';
import s from './Chip.module.scss';
import { ChipVariantsType } from '../../primitives';

type ChipProps = {
  variant: ChipVariantsType;
  state?: 'enabled' | 'disabled' | 'selected';
  label?: string;
  icon?: any;
  onClick?: () => void;
};

export const Chip = ({
  variant = ChipVariants.Filled,
  label,
  state = 'enabled',
  icon,
  onClick = () => {},
}: ChipProps) => (
  <button
    type="button"
    className={classNames(s.chip, s[variant], s[state])}
    onClick={() => onClick()}
  >
    {icon && <div className={s.icon}>{icon}</div>}
    {label && <span>{label}</span>}
  </button>
);
