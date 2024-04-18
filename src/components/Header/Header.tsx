import styles from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import { Link } from "react-router-dom";
import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";

const Header = () => {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />

               <nav className={styles.links}>
                  <Link to="/articles">Статьи</Link>
                  <Link to="/shop">Магазин</Link>
                  <Link to="/forum">Форум</Link>
                  <Link to="/gallery">Галерея</Link>
                  <Button variant="outlined" color="secondary">
                     Войти
                  </Button>
               </nav>
            </div>
         </Wrapper>
      </header>
   );
};

export default Header;
