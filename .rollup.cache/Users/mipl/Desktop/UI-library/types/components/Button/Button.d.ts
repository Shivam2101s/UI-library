import React from 'react';
import { ButtonSizesType, ButtonVariantsType } from '../../primitives';
import { VariantType } from '../Spinner/Spinner';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: ButtonVariantsType;
    size?: ButtonSizesType;
    leftIcon?: any;
    rightIcon?: any;
    isLoading?: boolean;
    isDisabled?: boolean;
    fullwidth?: boolean;
    minWidth?: string;
    borderRadius?: string;
    spinnerVariant?: VariantType;
    customStyle?: any;
}
export declare const Button: (props: ButtonProps) => JSX.Element;
