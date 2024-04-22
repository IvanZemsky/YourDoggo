import styles from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";
import PageNavLink from "../UI/PageNavLink/PageNavLink";
import { Link } from "react-router-dom";

const Header = () => {
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

                  <Link to="/signin">
                     <Button variant="outlined" color="secondary">
                        Войти
                     </Button>
                  </Link>
                  
               </nav>
            </div>
         </Wrapper>
      </header>
   );
};

export default Header;
