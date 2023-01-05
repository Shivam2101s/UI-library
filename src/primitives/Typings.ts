import { Color } from './Color';
import { TypeScales, TypographyHtmlTags } from './Typescales';
import { BadgeVariants } from './BadgeTypes';
import { ButtonSizes, ButtonColor, ButtonVariants } from './ButtonTypes';
import { AppBarTypes } from './AppBarTypes';
import { CheckboxVariant } from './CheckBox';
import { ChipVariants } from './ChipTypes';

export type FontVariantType = keyof typeof TypeScales;
export type RenderType = keyof typeof TypographyHtmlTags;

export type ColorType = keyof typeof Color;

export type BadgeVariantsType = keyof typeof BadgeVariants;
export type ChipVariantsType = keyof typeof ChipVariants;

export type ButtonVariantsType = keyof typeof ButtonVariants;
export type ButtonColorType = keyof typeof ButtonColor;
export type ButtonSizesType = keyof typeof ButtonSizes;

export type AppBarVariantType = keyof typeof AppBarTypes;

export type CheckboxVariantType = keyof typeof CheckboxVariant;
