import React from 'react';
import classnames from 'classnames';
import s from './Radio.module.scss';
import Typography from '../Typography';
import { Color, TypeScales } from '../../primitives';
import withCheckHOC from '../../HOCs/withCheckbox';

interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  disabled: boolean;
  id: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  description?: string;
}

const Radio = (props: RadioProps) => {
  const {
    isChecked,
    disabled,
    id,
    label,
    description,
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
        <div className={classnames(s.checkmark, { [s.hasChildren]: !!label })}>
          <svg
            className={classnames('tick-svg', { [s.tickSvg]: isChecked })}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <circle cx="5" cy="5" r="5" fill="#0012FF" />
          </svg>
        </div>
        <div className={s.children}>
          {label && (
            <Typography
              color={disabled ? Color.grey_40 : Color.text_default}
              variant={TypeScales.body_m}
              label={label}
            />
          )}
          {description && (
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

export default withCheckHOC(Radio);
