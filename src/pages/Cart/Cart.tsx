import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/constants/routes";
import CartProductList from './components/CartProductList/CartProductList';

const Shop = RoutesEnum.Shop

const Cart = () => {
   return (
      <Wrapper>
         <div className={styles.content}>
            <header className={styles.header}>
              <h2 className={styles.title}>Корзина</h2>
              <Link to={`/${Shop}`} className={styles.headerLink}>Назад в магазин</Link>
            </header>
            <CartProductList/>
         </div>
      </Wrapper>
   );
};

export default Cart;
