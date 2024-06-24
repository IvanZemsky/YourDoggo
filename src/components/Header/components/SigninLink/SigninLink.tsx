import { RoutesEnum } from "@/constants/routes";
import styles from "./SigninLink.module.scss";
import PageLink from "@/components/UI/PageLink/PageLink";

const {Signin} = RoutesEnum

const SigninLink = () => {
   return (
      <PageLink
         to={`/${Signin}`}
         hasRippleEffect
         variant="outlined"
         color="secondary"
         className={styles.signinBtn}
      >
         Войти
      </PageLink>
   );
};

export default SigninLink;
