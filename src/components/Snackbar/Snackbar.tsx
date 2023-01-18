import React from 'react';
import { Color, ColorsPallete } from '../../primitives';
import Typography from '../Typography';
import s from './Snackbar.module.scss';

interface SnackbarTypes {
  variant:
    | 'positivePriority'
    | 'criticalPriority'
    | 'warningPriority'
    | 'neutralPriority'
    | 'positiveNotPriority'
    | 'criticalNotPriority'
    | 'warningNotPriority'
    | 'neutralNotPriority';
  leftIcon?: any;
  rightIcon?: any;
  label: string;
}

function Snackbar({ leftIcon, rightIcon, label, variant }: SnackbarTypes) {
  return {
    //   {success toast}
    positivePriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.positive_60}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.grey_white}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    criticalPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.negative_60}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.grey_white}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    warningPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.warning_30}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.grey_black}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    neutralPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.grey_black}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.grey_white}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    positiveNotPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.positive_20}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.positive_text}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    criticalNotPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.negative_20}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.negative_80}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    warningNotPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.warning_20}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.warning_70}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
    neutralNotPriority: (
      <div
        className={s.container}
        style={{ backgroundColor: `${ColorsPallete.grey_20}` }}
      >
        <div className={s.leftIcon}>{leftIcon}</div>
        <div>
          <Typography
            variant="body_para_m"
            color={Color.grey_black}
            label={label}
          />
        </div>
        <div className={s.rightIcon}>{rightIcon}</div>
      </div>
    ),
  }[variant];
}

export default Snackbar;
