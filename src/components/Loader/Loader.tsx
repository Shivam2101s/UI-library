import React from 'react';
import Typography from '../Typography';
import s from './Loader.module.scss';

interface LoaderProps {
  variant?: 'loading' | 'success';
  loadingTitle?: string;
  loadingSubtitle?: string;
  successTitle?: string;
  successSubtitle?: string;
}

const Loader = ({
  variant = 'loading',
  loadingTitle,
  loadingSubtitle,
  successTitle,
  successSubtitle,
}: LoaderProps) => {
  console.log();
  return {
    loading: (
      <div className={s.main}>
        <div className={s.loader}>
          <img src="/img/DS/loaders/loader.gif" alt="" />
        </div>
        {loadingTitle && (
          <div className={s.title}>
            <Typography
              label={loadingTitle}
              variant="body_big_b"
              color="text_label"
            />
          </div>
        )}
        {loadingSubtitle && (
          <div className={s.subTitle}>
            <Typography
              label={loadingSubtitle}
              variant="body_para_m"
              color="text_placeholder"
            />
          </div>
        )}
      </div>
    ),
    success: (
      <div className={s.main}>
        <div className={s.loader}>
          <img src="/img/DS/loaders/successTick.gif" alt="" />
        </div>
        {successTitle && (
          <div className={s.title}>
            <Typography
              label={successTitle}
              variant="body_big_b"
              color="text_label"
            />
          </div>
        )}
        {successSubtitle && (
          <div className={s.subTitle}>
            <Typography
              label={successSubtitle}
              variant="body_para_m"
              color="text_placeholder"
            />
          </div>
        )}
      </div>
    ),
  }[variant];
};

export default Loader;
