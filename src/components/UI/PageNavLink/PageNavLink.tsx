import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNavLink.module.scss";

interface LinkProps {
   to: string;
}

interface ISetActive {
   isActive: boolean;
}

const PageNavLink = ({ to, children }: PropsWithChildren<LinkProps>) => {
   const setActive = ({ isActive }: ISetActive) =>
      [
        styles.link,
        isActive ? styles.active : ""
      ].join(" ");

   return (
      <NavLink to={to} className={setActive}>
         {children}
      </NavLink>
   );
};

export default PageNavLink;
