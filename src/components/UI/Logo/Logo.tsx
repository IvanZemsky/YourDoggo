import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import PawIcon from "../icons/PawIcon";
import styles from './Logo.module.scss'
import { Link } from "react-router-dom";
import { AnchorHTMLAttributes } from "react";

const Logo = ({...attributes}: AnchorHTMLAttributes<HTMLAnchorElement>) => {

   const is350px = useMediaQuery({maxWidth: 350})

   return (
      <Link
         to="/"
         {...attributes}
      >
         <Button variant="filled" className={styles.logo} icon={<PawIcon/>}>
            {!is350px && "YourDoggo"}
         </Button>
      </Link>
   );
};

export default Logo;
