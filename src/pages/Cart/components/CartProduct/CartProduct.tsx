import Button from "@/components/UI/Button/Button";
import styles from "./CartProduct.module.scss";
import { useAppDispatch } from "@/hooks/redux";
import {
   decrease,
   increase,
   removeProduct,
} from "@/store/slices/shop/cartSlice";
import { memo, useCallback } from "react";
import TrashIcon from "@/components/UI/icons/TrashIcon";

interface CartProductProps {
   id: string;
   name: string;
   price: number;
   amount: number;
   img: string;
}

const CartProduct = memo((props: CartProductProps) => {
   const { id, name, price, amount, img } = props;
   const dispatch = useAppDispatch();

   const handleIncrease = useCallback(() => {
      dispatch(increase(id));
   }, []);

   const handleDecrease = useCallback(() => {
      dispatch(decrease(id));
   }, []);

   const handleRemove = useCallback(() => {
      dispatch(removeProduct(id));
   }, []);

   const totalPrice = price * amount;

   return (
      <div className={styles.card}>
         <div className={styles.imgWrap}>
            <img src={img} alt="Изображение товара" />
         </div>
         <div className={styles.content}>
            <div className={styles.info}>
               <p className={styles.name}>{name}</p>
               <p className={styles.price}>{price} ₽</p>
            </div>
            <div className={styles.controls}>
               <div className={styles.controlsContent}>
                  <div className={styles.buttons}>
                     <Button
                        variant="filled"
                        className={styles.amountBtn}
                        onClick={handleDecrease}
                     >
                        -
                     </Button>
                     <p className={styles.amount}>{amount}</p>
                     <Button
                        variant="filled"
                        className={styles.amountBtn}
                        onClick={handleIncrease}
                     >
                        +
                     </Button>
                  </div>
                  <p className={styles.totalPrice}>{totalPrice} ₽</p>
               </div>
               <Button
                  variant="none"
                  icon={<TrashIcon />}
                  className={styles.removeBtn}
                  onClick={handleRemove}
               />
            </div>
         </div>
      </div>
   );
});

export default CartProduct;
