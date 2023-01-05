import React from 'react';
import ChevronRight from '../../icons/ChevronRight';
import Typography from '../../Typography';

import s from './ListItem.module.scss';

export type ListItemType = {
  label: string;
  value: string;
  placeholder: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const ListItem: React.FunctionComponent<ListItemType> = ({
  label,
  value,
  placeholder,
  onClick,
  disabled = false,
}) => (
  <div
    className={s.root}
    onClick={() => {
      if (!disabled) {
        onClick();
      }
    }}
    aria-hidden
  >
    <Typography label={label} color="text_default" variant="body_b" />

    <div className={s.value_container}>
      <div className={s.value}>
        {value ? (
          <Typography label={value} color="text_default" variant="body_m" />
        ) : (
          <Typography
            label={placeholder}
            color="text_placeholder"
            variant="body_m"
          />
        )}
      </div>
      {!disabled && (
        <div className={s.icon_right}>
          <ChevronRight width={16} primaryColor="text_placeholder" />
        </div>
      )}
    </div>
  </div>
);
