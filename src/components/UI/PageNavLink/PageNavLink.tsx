import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNavLink.module.scss";

type Props = {
   to: string;
}

interface ISetActive {
   isActive: boolean;
}

const PageNavLink = ({ to, children }: PropsWithChildren<Props>) => {
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
