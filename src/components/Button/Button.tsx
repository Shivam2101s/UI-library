/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import {
  ButtonSizesType,
  ButtonVariants,
  ButtonVariantsType,
  ColorType,
} from '../../primitives';
import { ButtonSizes } from '../../primitives/ButtonTypes';
import Spinner from '../Spinner';
import Typography from '../Typography';
import { VariantType } from '../Spinner/Spinner';

import s from './Button.module.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariantsType;
  size?: ButtonSizesType;
  leftIcon?: any;
  rightIcon?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  fullwidth?: boolean;
  minWidth?: string;
  borderRadius?: string;
  spinnerVariant?: VariantType;
  customStyle?: any;
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    variant = ButtonVariants.Primary,
    size = ButtonSizes.Big,
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled,
    onClick,
    fullwidth = false,
    minWidth = 'initial',
    borderRadius = '8px',
    spinnerVariant = 'light',
    customStyle = {},
    ...propsToFwd
  } = props;

  let textColor: ColorType = 'grey_white';
  switch (variant) {
    case ButtonVariants.DangerLink:
    case ButtonVariants.DangerNaked:
    case ButtonVariants.DangerOutline:
      textColor = 'negative_60';
      break;

    case ButtonVariants.SuccessLink:
    case ButtonVariants.SuccessNaked:
    case ButtonVariants.SuccessOutline:
      textColor = 'positive_80';
      break;

    case ButtonVariants.PrimaryLink:
    case ButtonVariants.PrimaryNaked:
    case ButtonVariants.PrimaryOutline:
      textColor = 'interaction_buttons';
      break;

    case ButtonVariants.BlackLink:
    case ButtonVariants.BlackOutline:
    case ButtonVariants.BlackNaked:
      textColor = 'text_default';
      break;

    default:
      textColor = 'grey_white';
  }

  if (isDisabled) {
    textColor = 'grey_40';
  }

  return (
    <button
      className={cn(s.btn, s[variant], s[size])}
      style={{
        minWidth: fullwidth ? '100%' : minWidth,
        borderRadius: borderRadius,
        ...customStyle,
      }}
      {...propsToFwd}
      disabled={isDisabled}
      onClick={isLoading ? ()=>{} : onClick}
    >
      {!isLoading && (
        <>
          {leftIcon && <div className={s.leftIcon}>{leftIcon}</div>}
          {label && (
            <Typography
              label={label}
              variant="body_para_sb"
              renderAs="SPAN"
              color={textColor}
            />
          )}
          {rightIcon && <div className={s.rightIcon}>{rightIcon}</div>}
        </>
      )}
      {isLoading && (
        <div className={s.spinner}>
          <Spinner size="xxs" variant={spinnerVariant} />
        </div>
      )}
    </button>
  );
};
