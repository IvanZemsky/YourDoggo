import { ComponentPropsWithoutRef, ReactNode, useRef } from "react";
import styles from "./PageLink.module.scss";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/scrollToTop";
import { useRippleEffect } from "@/hooks/useRippleEffect/useRippleEffect";

type Props = ComponentPropsWithoutRef<"a"> & {
   to: string;
   hasRippleEffect?: boolean
   variant?: "outlined" | "filled" | "none";
   color?: string;
   shadow?: boolean;
   setTopScroll?: boolean
   icon?: ReactNode | null;
}

export const PageLink = ({
   hasRippleEffect = false,
   variant = "filled",
   color = "primary",
   shadow = true,
   icon = null,
   className = "",
   setTopScroll = false,
   children,
   to,
   ...props
}: Props) => {
   
   const linkRef = useRef<HTMLAnchorElement>(null);

   useRippleEffect(linkRef, hasRippleEffect)

   if (setTopScroll) {
      scrollToTop()
   }

   return (
      <Link
         to={to}
         className={[
            styles.link,
            styles[color],
            styles[variant],
            shadow && styles["shadow"],
            className,
         ].join(" ")}
         ref={linkRef}
         {...props}
      >
         {icon}
         {children}
      </Link>
   );
};
