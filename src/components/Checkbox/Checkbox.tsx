import React from 'react';
import classNames from 'classnames';
import s from './Checkbox.module.scss';
import Typography from '../Typography';
import { CheckboxVariant, Color, TypeScales } from '../../primitives';
import withCheckHOC from '../../HOCs/withCheckbox';

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  disabled: boolean;
  id: string;
  variant?: CheckboxVariant;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  description?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const {
    isChecked,
    disabled,
    id,
    label,
    description,
    variant = CheckboxVariant.Default,
    handleChange,
    ...propsToFwd
  } = props;
  return (
    <label htmlFor={id} className={s.label}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        {...propsToFwd}
      />
      <div className={s.checkmark_wrapper}>
        <div className={classNames(s.checkmark, { [s.hasChildren]: !!label })}>
          {
            {
              [CheckboxVariant.Default]: (
                <svg
                  className={classNames('tick-svg', { [s.tickSvg]: isChecked })}
                  width="10"
                  height="7"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.56541L3.56649 6.13081L8.6973 1"
                    stroke="#0012FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              [CheckboxVariant.Dashed]: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classNames('tick-svg', { [s.tickSvg]: isChecked })}
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                >
                  <path
                    d="M1 1.00001H3.5L9 1.00001"
                    stroke="#0012FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            }[variant]
          }
        </div>
        <div className={s.children}>
          {label && (
            /* @ts-ignore */
            <Typography
              color={disabled ? Color.grey_40 : Color.text_default}
              variant={TypeScales.body_m}
              label={label}
            />
          )}
          {description && (
            /* @ts-ignore */
            <Typography
              color={disabled ? Color.grey_40 : Color.text_subheading}
              variant={TypeScales.body_m}
              label={description}
            />
          )}
        </div>
      </div>
    </label>
  );
};

export default withCheckHOC(Checkbox);
