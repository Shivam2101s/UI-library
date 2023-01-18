import React from 'react';
import cn from 'classnames';
import { Color } from '../../primitives';
import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';
import Typography from '../Typography';
import s from './Pagination.module.scss';

const THEME_SETTINGS = {
  light: {
    fontColor: Color.text_label,
    bgColor: Color.grey_white,
    activeColor: Color.text_placeholder,
    inactiveColor: Color.grey_20,
  },
  dark: {
    fontColor: Color.grey_white,
    bgColor: Color.grey_black,
    activeColor: Color.interaction_20,
    inactiveColor: Color.grey_10,
  },
};

type PaginationType = {
  activePage: number;
  totalPages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  theme?: 'dark' | 'light';
};

export const Pagination = ({
  activePage,
  totalPages,
  onPrevClick,
  onNextClick,
  theme = 'dark',
}: PaginationType) => (
  <div
    className={cn(s.root, { [s.light]: theme === 'light' })}
    style={{ backgroundColor: Color.grey_white }}
  >
    <button
      type="button"
      onClick={() => (activePage === 1 ? '' : onPrevClick())}
      className="cmn_touchable_area"
    >
      <ChevronLeft
        primaryColor={
          activePage === 1
            ? THEME_SETTINGS[theme].inactiveColor
            : THEME_SETTINGS[theme].activeColor
        }
        secondaryColor={
          activePage === 1
            ? THEME_SETTINGS[theme].inactiveColor
            : THEME_SETTINGS[theme].activeColor
        }
        height={24}
        width={24}
      />
    </button>
    <div className={s.text}>
      <Typography
        label={`${activePage} of ${totalPages}`}
        variant="body_sb"
        renderAs="SPAN"
        color={THEME_SETTINGS[theme].fontColor}
      />
    </div>
    <button
      type="button"
      onClick={() => (activePage === totalPages ? '' : onNextClick())}
      className="cmn_touchable_area"
    >
      <ChevronRight
        primaryColor={
          activePage === totalPages
            ? THEME_SETTINGS[theme].inactiveColor
            : THEME_SETTINGS[theme].activeColor
        }
        secondaryColor={
          activePage === totalPages
            ? THEME_SETTINGS[theme].inactiveColor
            : THEME_SETTINGS[theme].activeColor
        }
        height={24}
        width={24}
      />
    </button>
  </div>
);
