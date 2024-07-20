import styles from "./Footer.module.scss";
import {Wrapper, Logo} from "../UI";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Wrapper>
            <div className={styles.content}>
               <Logo className={styles.logo}/>

               <div className={styles.links}>
                  <Link to="/articles">Статьи</Link>
                  <Link to="/shop">Магазин</Link>
                  <Link to="/forum">Форум</Link>
                  <Link to="/gallery">Галерея</Link>
               </div>

               <div className={styles.info}>
                  <p>Все права защищены</p>
                  <p>2024</p>
               </div>
            </div>
         </Wrapper>
      </footer>
   );
};

export default Footer;
