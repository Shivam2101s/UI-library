import React from 'react';
import {
  TypeScales,
  TypographyHtmlTags,
  Color,
  ColorsPallete,
  ColorType,
  FontVariantType,
  RenderType,
} from '../../primitives';
import classNames from 'classnames';
import s from './Typography.module.scss';

type TypographyProps = {
  variant?: FontVariantType;
  color?: ColorType;
  renderAs?: RenderType;
  className?: string;
  style?: React.CSSProperties;
  label: any;
};

export const Typography = ({
  variant = TypeScales.body_m,
  color = Color.text_default,
  className,
  renderAs = TypographyHtmlTags.P,
  style,
  label,
}: TypographyProps) => {
  const colorValue = style?.color || ColorsPallete[color];
  const classValue = classNames(s[variant], {
    [`${className}`]: !!className,
  });
  const customStyle = { ...style, color: colorValue };
  //@ts-ignore
  return {
    [TypographyHtmlTags.H1]: (
      <h1 className={classValue} style={customStyle}>
        {label}
      </h1>
    ),
    [TypographyHtmlTags.H2]: (
      <h2 className={classValue} style={customStyle}>
        {label}
      </h2>
    ),
    [TypographyHtmlTags.H3]: (
      <h3 className={classValue} style={customStyle}>
        {label}
      </h3>
    ),
    [TypographyHtmlTags.H4]: (
      <h4 className={classValue} style={customStyle}>
        {label}
      </h4>
    ),
    [TypographyHtmlTags.H5]: (
      <h5 className={classValue} style={customStyle}>
        {label}
      </h5>
    ),
    [TypographyHtmlTags.H6]: (
      <h6 className={classValue} style={customStyle}>
        {label}
      </h6>
    ),
    [TypographyHtmlTags.P]: (
      <p className={classValue} style={customStyle}>
        {label}
      </p>
    ),
    [TypographyHtmlTags.SPAN]: (
      <span className={classValue} style={customStyle}>
        {label}
      </span>
    ),
  }[renderAs];
};
