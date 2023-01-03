import React from 'react';
import s from './Button.module.scss';
export interface ButtonProps {
    label:string;
}
 const Button = (props:ButtonProps) => {
    return <button className={s.root}>{props.label}</button>
}
export default Button;
