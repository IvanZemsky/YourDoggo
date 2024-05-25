import {
   ButtonHTMLAttributes,
   PropsWithChildren,
   ReactNode,
   useRef,
} from "react";
import styles from "./Button.module.scss";
import { useRippleEffect } from "../../../hooks/useRippleEffect/useRippleEffect";

interface ButtonProps {
   variant?: "outlined" | "filled" | "none";
   color?: string;
   icon?: ReactNode | null;
   className?: string | null;
}

type ButtonFullProps = PropsWithChildren<ButtonProps> &
   ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
   variant = "filled",
   color = "primary",
   icon = null,
   className = "",
   children,
   ...props
}: ButtonFullProps) => {
   const buttonRef = useRef(null);

   useRippleEffect(buttonRef);

   return (
      <button
         className={[styles.button, styles[color], styles[variant], className].join(
            " "
         )}
         ref={buttonRef}
         {...props}
      >
         {icon}
         {children}
      </button>
   );
};

export default Button;
