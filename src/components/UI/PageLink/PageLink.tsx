import { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styles from "./PageLink.module.scss";
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils/scrollToTop";

interface PageLinkProps {
   to: string;
   variant?: "outlined" | "filled" | "none";
   color?: string;
   shadow?: boolean;
   setTopScroll?: boolean
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
   setTopScroll = false,
   children,
   to,
   ...props
}: PageLinkFullProps) => {

   if (scrollToTop) {
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
         {...props}
      >
         {icon}
         {children}
      </Link>
   );
};

export default PageLink;
