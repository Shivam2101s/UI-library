import React from "react";
import { Color, TypeScales } from "../../primitives";
import Typography from "../Typography";
import s from "./ContentHeader.module.scss";

export interface ContentHeaderPropTypes {
  title: string;
  subtitle: string;
}
export function ContentHeader(props: ContentHeaderPropTypes) {
  const { title, subtitle } = props;

  return (
    <div className={s.root}>
      {/* @ts-ignore */}
      <Typography
        variant={TypeScales.h2}
        color={Color.grey_black}
        label={title}
      />
      {/* @ts-ignore */}
      <Typography
        variant={TypeScales.body_para_m}
        color={Color.grey_70}
        label={subtitle}
      />
    </div>
  );
}
