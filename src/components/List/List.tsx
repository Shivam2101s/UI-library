/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ListItem, ListItemType } from './ListItem/ListItem';

import Typography from '../Typography';
import s from './List.module.scss';

type ListProps = {
  heading: string;
  listItems: ListItemType[];
};

export const List: React.FunctionComponent<ListProps> = ({
  heading,
  listItems,
}) => (
  <div className={s.root}>
    <div className={s.heading}>
      {/* @ts-ignore */}
      <Typography label={heading} color="text_label" variant="small_sb" />
    </div>

    {listItems?.length > 0 &&
      listItems.map((listItem) => (
        <ListItem {...listItem} key={listItem.label} />
      ))}
  </div>
);

export default List;
