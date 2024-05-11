import { useAppSelector } from "@/hooks/redux";
import styles from "./CartOrder.module.scss";
import Button from "@/components/UI/Button/Button";

const CartOrder = () => {
   const cartProducts = useAppSelector((state) => state.cart.products);

   const totalPrice = cartProducts.reduce((sum, product) => {
      return (sum += product.amount * product.price);
   }, 0);

   if (!cartProducts.length) {
      return null;
   }

   return (
      <div>
         <div className={styles.order}>
            <p className={styles.totalPrice}>{totalPrice} ₽</p>
            <Button
               variant="filled"
               color="secondary"
               className={styles.orderBtn}
            >
               Оформить заказ
            </Button>
         </div>
      </div>
   );
};

export default CartOrder;
