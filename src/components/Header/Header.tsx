import styles from "./Header.module.scss";
import {PageNavLink} from "@/shared/ui";
import { useAppSelector } from "@/hooks/redux";
import SigninLink from "./components/SigninLink/SigninLink";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import { RoutesEnum } from "@/constants/routes";
import { useMediaQuery } from "react-responsive";
import { Menu, Logo, Wrapper } from "@/shared/ui";

const { Articles, Shop, Gallery, Forum } = RoutesEnum;

const Header = () => {
   const userLogin = useAppSelector((state) => state.auth.userLogin);

   const isOpen = useMediaQuery({ maxWidth: 655 });

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />

               <nav className={styles.links}>
                  <Menu isOpen={isOpen} burgerColor="secondary" variant="outlined">
                     <PageNavLink to={Articles}>Статьи</PageNavLink>
                     <PageNavLink to={Shop}>Магазин</PageNavLink>
                     <PageNavLink to={Forum}>Форум</PageNavLink>
                     <PageNavLink to={Gallery}>Галерея</PageNavLink>
                  </Menu>
                  {userLogin ? <ProfileLink /> : <SigninLink />}
               </nav>
            </div>
         </Wrapper>
      </header>
   );
};

export default Header;
