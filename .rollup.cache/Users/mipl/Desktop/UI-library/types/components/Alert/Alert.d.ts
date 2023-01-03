/// <reference types="react" />
type AlertType = {
    heading: string;
    subheading: string;
    buttonText?: string;
    leftIcon?: any;
    showButton?: boolean;
    variant?: 'critical' | 'warning' | 'upcoming';
    onProceed: () => void;
    children?: any;
};
export declare const Alert: ({ heading, subheading, buttonText, leftIcon, showButton, variant, onProceed, children, }: AlertType) => JSX.Element;
export {};
