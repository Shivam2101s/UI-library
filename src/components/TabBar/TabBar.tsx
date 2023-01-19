import cn from 'classnames';
import React from 'react';
import s from './TabBar.module.scss';
import Typography from '../Typography';
import { TypeScales } from '../../primitives';

export interface TabBarProps {
  tabItems: string[];
  activeTab: number;
  onTabClick: (e: number) => void;
}

export function TabBar(props: TabBarProps) {
  const { tabItems, activeTab, onTabClick } = props;

  //this will bring the element to center
  const handelPosition = (event: any) => {
    event.target.scrollIntoView({ inline: 'center' });
  };
  return (
    <div className={s.header} id="tabBarContainer">
      {tabItems?.map((e, i) => (
        <button
          type="button"
          onClick={(event) => {
            onTabClick(i);
            handelPosition(event);
          }}
          className={cn({
            [s.active]: activeTab === i,
          })}
          key={e}
        >
          <Typography
            label={e}
            variant={TypeScales.body_sb}
            color={activeTab === i ? 'text_default' : 'grey_40'}
          />
        </button>
      ))}
    </div>
  );
}
