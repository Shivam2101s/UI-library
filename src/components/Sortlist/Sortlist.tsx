import React from 'react';
import cn from 'classnames';
import Typography from '../Typography';
import s from './Sortlist.module.scss';
import Cross from '../icons/Cross';
import Settings from '../icons/Settings';

type props = {
  labels: { text: string; value: string }[];
  selectedLabel: string;
  changeSelectedLabel: ({
    text,
    value,
  }: {
    text: string;
    value: string;
  }) => void;
};

export const Sortlist = (props: props) => {
  const { labels, changeSelectedLabel, selectedLabel } = props;
  return (
    <div className={s.sort_options}>
      <div className={s.sort_display}>
        <Settings />
        &nbsp;
        <Typography
          renderAs="SPAN"
          label="Sort by"
          variant="small_sb"
          color="text_subheading"
        />
      </div>

      <div className={s.sort_labels}>
        {labels.map((label) => (
          <span
            className={cn({
              [s.label_item]: true,
              [s.active_label]: selectedLabel === label.value,
            })}
            onClick={() => {
              changeSelectedLabel(label);
            }}
            aria-hidden
          >
            <Typography
              label={label.text}
              variant="small_sb"
              color="text_subheading"
            />
            {selectedLabel === label.value && (
              <span className={s.cross_icon}>
                <Cross />
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
