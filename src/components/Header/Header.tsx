import styles from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";
import PageNavLink from "../UI/PageNavLink/PageNavLink";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks/redux";
import SigninLink from "./components/SigninLink/SigninLink";
import ProfileLink from "./components/ProfileLink/ProfileLink";

const Header = () => {
   const userLogin = useAppSelector(state => state.auth.userLogin)

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />

               <nav className={styles.links}>
                  <PageNavLink to="/articles">Статьи</PageNavLink>
                  <PageNavLink to="/shop">Магазин</PageNavLink>
                  <PageNavLink to="/forum">Форум</PageNavLink>
                  <PageNavLink to="/gallery">Галерея</PageNavLink>

                  {userLogin ? <ProfileLink /> : <SigninLink/>}
                  
               </nav>
            </div>
         </Wrapper>
      </header>
   );
};

export default Header;
