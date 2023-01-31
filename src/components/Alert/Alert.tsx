/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import cn from "classnames";
import { ButtonSizes, ButtonVariants } from "../../primitives/ButtonTypes";
import ChevronRight from "../icons/ChevronRight";
import Button from "../Button";
import s from "./Alert.module.scss";
import Typography from "../Typography";


type AlertType = {
  heading: string;
  subheading: string;
  buttonText?: string;
  leftIcon?: any;
  showButton?: boolean;
  variant?: "critical" | "warning" | "upcoming";
  onProceed: () => void;
  children?: any;
};

export const Alert = ({
  heading,
  subheading,
  buttonText,
  leftIcon,
  showButton = true,
  variant = "upcoming",
  onProceed,
  children,
}: AlertType) => {
  const getGifUrl = () => {
  if(variant === "upcoming"){
    return 'https://d1wsfdvq5y3rer.cloudfront.net/production/team/public/FS_20230120164041457769.gif'
  }else if(variant === "critical"){
    return 'https://d1wsfdvq5y3rer.cloudfront.net/production/team/public/FS_20230120164056640751.gif'
  }else {
    return 'https://d1wsfdvq5y3rer.cloudfront.net/production/team/public/FS_20230120164111246374.gif'
  }
  }
  return(
  <div
    className={cn(s.root, {
      [s.critical]: variant === "critical",
      [s.warning]: variant === "warning",
      [s.upcoming]: variant === "upcoming",
    })}
  >
    <div className={s.top}>
      <div className={s.left}>
        {leftIcon || (
          <img src={`${getGifUrl()}`} alt={variant} />
        )}
      </div>
      <div className={s.center}>
        <Typography
          renderAs="H3"
          color="text_default"
          label={heading}
          variant="body_para_sb"
        />
        <Typography renderAs="H4" label={subheading} variant="small_m" />
      </div>
      <div className={s.right}>
        {variant === "upcoming" ? (
          <button
            type="button"
            onClick={onProceed}
            className={cn(s.btn, "cmn_touchable_area")}
          >
            <ChevronRight />
          </button>
        ) : (
          <>
            {showButton && (
              <Button
                label={`${buttonText}`}
                onClick={onProceed}
                size={ButtonSizes.Small}
                variant={
                  variant === "critical"
                    ? ButtonVariants.Primary
                    : ButtonVariants.PrimaryOutline
                }
              />
            )}
          </>
        )}
      </div>
    </div>
    {children}
  </div>
)};
