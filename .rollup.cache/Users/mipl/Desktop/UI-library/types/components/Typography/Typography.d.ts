import React from 'react';
import { ColorType, FontVariantType, RenderType } from '../../primitives';
type TypographyProps = {
    variant?: FontVariantType;
    color?: ColorType;
    renderAs?: RenderType;
    className?: string;
    style?: React.CSSProperties;
    label: any;
};
export declare const Typography: ({ variant, color, className, renderAs, style, label, }: TypographyProps) => any;
export {};
