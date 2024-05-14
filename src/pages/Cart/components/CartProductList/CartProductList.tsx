import { useAppSelector } from "@/hooks/redux";
import styles from "./CartProductList.module.scss";
import CartProduct from "../CartProduct/CartProduct";

const CartProductList = () => {
   const cartProducts = useAppSelector((state) => state.cart.products);

   return (
      <div className={styles.cards}>
         {cartProducts.length ? cartProducts.map((product) => (
            <CartProduct
               key={product._id}
               id={product._id}
               name={product.name}
               price={product.price}
               amount={product.amount}
               img={product.img}
            />
         )) : 'Здесь пока ничего нет'}
      </div>
   );
};

export default CartProductList;
