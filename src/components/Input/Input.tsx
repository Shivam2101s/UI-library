/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classNames from 'classnames';
import useScrollIntoView from '../../hooks/useScrollIntoView';
import useAutofocus from '../../hooks/useAutofocus';
import s from './Input.module.scss';
import Typography from '../Typography';
import { Color, TypeScales } from '../../primitives';
import InfoCircle from '../icons/InfoCircle';

export interface InputProps
  extends React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  errorMessage?: string;
  inputMode?:
    | 'text'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'none';
  autoFocus?: boolean;
  hasError?: boolean;
  scrollIntoView?: boolean;
  placeholder?: string;
  handleChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  label?: string;
  rightIcon?: any;
  leftIcon?: any;
  errorIcon?: any;
  value?: any;
  withShadow?: boolean;
  isTextArea?: boolean;
  disabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}

const Input = (props: InputProps) => {
  const {
    disabled,
    label,
    inputRef,
    leftIcon,
    rightIcon,
    scrollIntoView,
    value,
    hasError,
    handleChange,
    placeholder,
    withShadow,
    autoFocus,
    isTextArea,
    errorMessage,
    errorIcon,
    inputMode,
    ...propsToFwd
  } = props;
  const customRef = React.useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null
  );
  useScrollIntoView({ scrollIntoView: scrollIntoView, ref: customRef });
  useAutofocus({ autoFocus: autoFocus, ref: customRef, currentValue: value });

  return (
    <div className={s.root}>
      {isTextArea ? (
        <fieldset
          className={classNames({
            [s.has_error]: hasError,
            [s.with_shadow]: withShadow,
            [s.disabled]: disabled,
            [s.text_area_fieldset]: isTextArea,
            [s.onFocus]: autoFocus,
          })}
        >
          {label && (
            <legend>
              <label className={classNames({ [s.disabled_label]: disabled })}>
                <Typography
                  label={label}
                  variant={TypeScales.body_para_sb}
                  color={Color.text_default}
                />
              </label>
            </legend>
          )}

          <div
            className={classNames(s.text_area, {
              [s.without_label_textarea]: !label,
            })}
          >
            <textarea
              //@ts-ignore
              ref={(ref) => {
                //@ts-ignore
                customRef.current = inputRef ? (inputRef.current = ref) : ref;
              }}
              onChange={handleChange}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              {...propsToFwd}
            />
          </div>
        </fieldset>
      ) : (
        <fieldset
          className={classNames({
            [s.has_error]: hasError,
            [s.with_shadow]: withShadow,
            [s.disabled]: disabled,
            [s.with_right_icon]: !!rightIcon,
            [s.without_label]: !label,
            [s.onFocus]: autoFocus,
          })}
        >
          {label && (
            <legend>
              <label className={classNames({ [s.disabled_label]: disabled })}>
                <Typography
                  label={label}
                  variant={TypeScales.body_para_sb}
                  color={Color.text_default}
                />
              </label>
            </legend>
          )}
          <div className={classNames(s.input, { [s.without_label]: !label })}>
            {leftIcon && <div className={s.left_icon}>{leftIcon}</div>}
            <input
              //@ts-ignore
              ref={(ref) => {
                //@ts-ignore
                customRef.current = inputRef ? (inputRef.current = ref) : ref;
              }}
              onChange={handleChange}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              inputMode={inputMode}
              {...propsToFwd}
            />

            {rightIcon && <div className={s.right_icon}>{rightIcon}</div>}
          </div>
        </fieldset>
      )}
      {hasError && errorMessage && (
        <div className={s.error_msg}>
          <InfoCircle
            variant="linear"
            height={16}
            width={16}
            primaryColor="negative_60"
          />
          <Typography
            style={{ marginLeft: '4px' }}
            label={errorMessage}
            variant="small_para_m"
            color="negative_60"
          />
        </div>
      )}
    </div>
  );
};

export default Input;
