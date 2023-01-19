/* eslint-disable camelcase */
import React from 'react';
import { Color, ColorsPallete, TypeScales } from '../../primitives';
import { RatingType } from '../../primitives/RatingTypes';
import Typography from '../Typography';
import s from './Rating.module.scss';

const Rating: React.FunctionComponent<RatingType> = ({
  title,
  averageRating,
  totalRating,
  details,
  topRatingColor,
  midRatingColor,
  lowRatingColor,
  bgColor,
}) => {
  const getColor = (rating:any) => {
    if (rating === 1) {
      //@ts-ignore
      return ColorsPallete[lowRatingColor] || ColorsPallete[Color.negative_60];
    } else if (rating === 2) {
      // @ts-ignore
      return ColorsPallete[midRatingColor] || ColorsPallete[Color.orange_50];
    } else {
      //@ts-ignore
      return ColorsPallete[topRatingColor] || ColorsPallete[Color.positive_50];
    }
  };
  return (
    <section
      className={s.root}
      style={{
        //@ts-ignore
        backgroundColor: ColorsPallete[bgColor] || ColorsPallete[Color.grey_10],
      }}
    >
      <div className={s.title}>
      {/* @ts-ignore */}
        <Typography
          label={title}
          variant={TypeScales.h4}
          color={Color.text_default}
        />
      </div>
      <div className={s.left}>
        <div className={s.rating}>
          <span>
          <svg height="511pt" viewBox="0 -10 511.987 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="M510.652 185.902a27.158 27.158 0 00-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 00-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0010.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 007.98-28.927zm0 0" fill="#ffc107"/></svg>          </span>
          <span>{averageRating}</span>
        </div>
        <div className={s.desc}>
          {/* @ts-ignore */}
          <Typography
            label={`Based on ${totalRating} customer reviews`}
            variant={TypeScales.small_m}
            color={Color.text_subheading}
          />
        </div>
      </div>
      <div className={s.right}>
        {details?.map((el, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={s.rating_bars} key={idx}>
            <span>{el.rating}</span>
            <div className={s.bar}>
              <span
                style={{
                  width: `${el.percent}%`,
                  backgroundColor: getColor(el.rating),
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={s.right} />
    </section>
  );
};

export default Rating;
