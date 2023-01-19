import React from 'react';
import classnames from 'classnames';
import withCheckHOC from '../../HOCs/withCheckbox';
import Typography from '../Typography';
import s from './Switch.module.scss';

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  isYesNo?: boolean;
  disabled: boolean;
  id: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Switch = (props: SwitchProps) => {
  const {
    isYesNo = false,
    isChecked,
    disabled,
    id,
    handleChange,
    ...propsToFwd
  } = props;
  return (
    <label htmlFor={id} className={s.switch}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        {...propsToFwd}
      />
      {isYesNo ? (
        <div
          className={classnames(s.yesNo, {
            [s.isActive]: !isChecked && !disabled,
            [s.isInActive]: isChecked && !disabled,
            [s.isDisabled]: disabled,
          })}
        >
          <Typography
            label="Yes"
            variant="small_para_sb"
            color="grey_white"
            renderAs="P"
          />
          <Typography
            label="No"
            variant="small_para_sb"
            color="grey_white"
            renderAs="P"
          />
        </div>
      ) : (
        <span className={classnames(s.slider, s.round)} />
      )}
    </label>
  );
};
export default withCheckHOC(Switch);
