import { useAppSelector } from "@/hooks/redux";
import styles from "./CartOrder.module.scss";
import Button from "@/components/UI/Button/Button";

const CartOrder = () => {
   const cartProducts = useAppSelector((state) => state.cart.products);

   const totalPrice = cartProducts.reduce((sum, product) => {
      return sum + product.amount * product.price;
   }, 0);

   const totalAmount = cartProducts.reduce((sum, product) => {
      return sum + product.amount;
   }, 0);

   if (!cartProducts.length) {
      return null;
   }

   return (
      <div className={styles.content}>
         <div className={styles.order}>
            <div className={styles.info}>
               <div className={styles.infoWrap}>
                  <p className={styles.label}>Всего товаров:</p>
                  <p className={styles.infoText}>{totalAmount}</p>
               </div>
               <div className={styles.infoWrap}>
                  <p className={styles.label}>Общая стоимость: </p>
                  <p className={styles.infoText}>{totalPrice} ₽</p>
               </div>
            </div>
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
