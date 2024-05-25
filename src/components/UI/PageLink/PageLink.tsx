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

   return (
      <Link
         to={to}
         className={[styles.link, styles[color], styles[variant], className].join(" ")}
         {...props}
      >
         {icon && <span className={styles.icon}>{icon}</span>}
         {children}
      </Link>
   );
};

export default PageLink;
