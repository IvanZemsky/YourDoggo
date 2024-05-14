import {AnchorHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styles from "./PageLink.module.scss";
import { Link } from "react-router-dom";

interface PageLinkProps {
   to: string;
   variant?: "outlined" | "filled" | "none";
   color?: string;
   icon?: ReactNode | null;
   className?: string | null;
}

type PageLinkFullProps = PropsWithChildren<PageLinkProps> & AnchorHTMLAttributes<HTMLAnchorElement>;

const PageLink = ({
   variant = "filled",
   color = "primary",
   icon = null,
   className = "",
   children,
   to,
   ...props
}: PageLinkFullProps) => {
   let variantStyles;
   let colorStyles;

   switch (variant) {
      case "outlined":
         variantStyles = styles.outlined;
         break;
      case "filled":
         variantStyles = styles.filled;
         break;
      case "none":
         variantStyles = styles.none;
         break;
   }

   switch (color) {
      case "primary":
         colorStyles = styles.primaryColor;
         break;
      case "secondary":
         colorStyles = styles.secondaryColor;
         break;
   }

   return (
      <Link
         to={to}
         className={[styles.link, colorStyles, variantStyles, className].join(" ")}
         {...props}
      >
         {icon && <span className={styles.icon}>{icon}</span>}
         {children}
      </Link>
   );
};

export default PageLink;
