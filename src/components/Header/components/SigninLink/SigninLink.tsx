import Button from "@/components/UI/Button/Button";
import { Link } from "react-router-dom";
import styles from './SigninLink.module.scss'

const SigninLink = () => {
   return (
      <Link to="/signin">
         <Button variant="outlined" color="secondary" className={styles.signinBtn}>
            Войти
         </Button>
      </Link>
   );
};

export default SigninLink;
