/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonVariants } from '../../primitives/ButtonTypes';
import cn from 'classnames';
import s from './NoInternet.module.scss';
import { Button } from '../Button/Button';
import Typography from '../Typography';
import { Color, TypeScales } from '../../primitives';

const NotInternetComponent = ({
  onRefreshClick,
}: {
  onRefreshClick?: () => void;
}) => (
  <div className={cn(s.body)}>
    <div className={s.container}>
      <img
        className={s.icon}
        src="https://d1wsfdvq5y3rer.cloudfront.net/production/team/public/FS_20230118114825096280.gif"
        alt="internet-icon"
      />
      <div className={s.heading}>
        {/* @ts-ignore */}
        <Typography
          label="Whoops!"
          color={Color.text_default}
          variant={TypeScales.h3}
        />
      </div>
      <div className={s.subHeading}>
        {/* @ts-ignore */}
        <Typography
          label="Slow or no internet connection"
          color={Color.text_subheading}
          variant={TypeScales.body_sb}
        />
      </div>
      <div className={s.button}>
        <Button
          onClick={onRefreshClick}
          variant={ButtonVariants.PrimaryOutline}
          label="Refresh"
          fullwidth
        />
      </div>
    </div>
  </div>
);

interface NoInternetProps {
  onRefreshClick?: () => void;
  overlay?: boolean;
}

export function NoInternet({
  onRefreshClick,
  overlay = false,
}: NoInternetProps) {
  if (!overlay) return <NotInternetComponent onRefreshClick={onRefreshClick} />;

  const appRoot = global.document.getElementsByTagName('BODY')[0];

  return ReactDOM.createPortal(
    <div className="cmn_fullscreen_fixed">
      <NotInternetComponent onRefreshClick={onRefreshClick} />
    </div>,
    appRoot
  );
}
