import React from 'react';
import Link from 'next/link'
import { BreadCrumb } from '../../primitives/ProgressIndicatorTypes';
import ChevronRight from '../icons/ChevronRight';
import s from './BreadCrumbs.module.scss';

export function BreadCrumbs({ data }: { data: BreadCrumb[] }) {
  return (
    <div className={s.root}>
      {data?.map((item, index) => (
        <div key={item.id} className={s.link_item}>
          {item.type === 'internal' ? (
            <>
              <Link legacyBehavior href={item.url}>
                <a href={item.url}>{item.name}</a>
              </Link>
              {index < data.length - 1 && (
                <ChevronRight width={20} height={20} />
              )}
            </>
          ) : (
            <>
              <a href={`${item.url}`}>{item.name}</a>
              {index < data.length - 1 && (
                <ChevronRight width={20} height={20} />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default BreadCrumb;
