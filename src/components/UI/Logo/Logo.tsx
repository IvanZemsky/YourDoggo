import Button from "../Button/Button";
import PawIcon from "../icons/PawIcon";
import styles from './Logo.module.scss'
import { Link } from "react-router-dom";


const Logo = () => {
   return (
      <Link
         to="/"
      >
         <Button variant="filled" className={styles.logo} icon={<PawIcon/>}>
            YourDoggo
         </Button>
      </Link>
   );
};

export default Logo;
