import {
   ButtonHTMLAttributes,
   ReactNode,
   useRef,
} from "react";
import styles from "./Button.module.scss";
import { useRippleEffect } from "../../../hooks/useRippleEffect/useRippleEffect";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "outlined" | "filled" | "none";
   color?: string
   shadow?: boolean;
   icon?: ReactNode | null;
}

export const Button = ({
   variant = "filled",
   color = "primary",
   shadow = true,
   icon = null,
   className = "",
   children,
   ...props
}: ButtonProps) => {

   const buttonRef = useRef<HTMLButtonElement>(null);

   useRippleEffect(buttonRef)

   return (
      <button
         type="button"
         className={[
            styles.button,
            styles[color],
            styles[variant],
            shadow && styles["shadow"],
            className,
         ].join(" ")}
         ref={buttonRef}
         {...props}
      >
         {icon}
         {children}
      </button>
   );
};
