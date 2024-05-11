import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { RoutesEnum } from "@/constants/routes";
import CartProductList from './components/CartProductList/CartProductList';
import CartOrder from './components/CartOrder/CartOrder';

const Shop = RoutesEnum.Shop

const Cart = () => {
   return (
      <Wrapper>
         <section className={styles.content}>
            <header className={styles.header}>
              <h2 className={styles.title}>Корзина</h2>
              <Link to={`/${Shop}`} className={styles.headerLink}>Назад в магазин</Link>
            </header>
            <div className={styles.products}>
               <CartProductList/>
               <CartOrder />
            </div>
         </section>
      </Wrapper>
   );
};

export default Cart;
