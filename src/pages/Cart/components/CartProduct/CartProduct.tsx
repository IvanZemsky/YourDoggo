import Button from "@/components/UI/Button/Button";
import styles from "./CartProduct.module.scss";
import { useAppDispatch } from "@/hooks/redux";
import { decrease, increase, removeProduct } from "@/store/slices/shop/cartSlice";
import { memo, useCallback } from "react";
import TrashIcon from "@/components/UI/icons/TrashIcon";

interface CartProductProps {
   id: string;
   name: string;
   price: number;
   amount: number;
}

const CartProduct = memo((props: CartProductProps) => {
   const { id, name, price, amount } = props;
   const dispatch = useAppDispatch();

   const handleIncrease = useCallback(() => {
      dispatch(increase(id));
   }, [])

   const handleDecrease = useCallback(() => {
      dispatch(decrease(id));
   }, [])

   const handleRemove = useCallback(() => {
      dispatch(removeProduct(id))
   }, [])

   const totalPrice = price * amount;

   return (
      <div className={styles.card}>
         <div className={styles.imgWrap}>
            <img
               src="https://images.unsplash.com/photo-1601306187938-754636bc78c2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="Изображение товара"
            />
         </div>
         <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{price} ₽</p>
         </div>
         <div className={styles.controls}>
            <Button variant="filled" className={styles.amountBtn} onClick={handleDecrease}>
               -
            </Button>
            <p className={styles.amount}>{amount}</p>
            <Button variant="filled" className={styles.amountBtn} onClick={handleIncrease}>
               +
            </Button>
            <p className={styles.totalPrice}>{totalPrice} ₽</p>
            <Button
               variant="none"
               icon={<TrashIcon />}
               className={styles.removeBtn}
               onClick={handleRemove}
            />
         </div>
      </div>
   );
});

export default CartProduct;
