import { useMediaQuery } from "react-responsive";
import PawIcon from "../icons/PawIcon";
import styles from './Logo.module.scss'
import { AnchorHTMLAttributes } from "react";
import PageLink from "../PageLink/PageLink";

const Logo = ({...attributes}: AnchorHTMLAttributes<HTMLAnchorElement>) => {

   const is350px = useMediaQuery({maxWidth: 350})

   return (
      <PageLink to="/" hasRippleEffect {...attributes} variant="outlined" icon={<PawIcon/>} className={styles.logo}>
         {!is350px && "YourDoggo"}
      </PageLink>
   );
};

export default Logo;
