import { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styles from "./PageLink.module.scss";
import { Link } from "react-router-dom";

interface PageLinkProps {
   to: string;
   variant?: "outlined" | "filled" | "none";
   color?: string;
   shadow?: boolean;
   icon?: ReactNode | null;
   className?: string | null;
}

type PageLinkFullProps = PropsWithChildren<PageLinkProps> &
   AnchorHTMLAttributes<HTMLAnchorElement>;

const PageLink = ({
   variant = "filled",
   color = "primary",
   shadow = true,
   icon = null,
   className = "",
   children,
   to,
   ...props
}: PageLinkFullProps) => {
   return (
      <Link
         to={to}
         className={[
            styles.button,
            styles[color],
            styles[variant],
            shadow && styles["shadow"],
            className,
         ].join(" ")}
         {...props}
      >
         {icon}
         {children}
      </Link>
   );
};

export default PageLink;
