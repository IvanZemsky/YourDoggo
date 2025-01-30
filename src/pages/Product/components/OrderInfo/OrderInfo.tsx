import {Button} from "@/shared/ui";
import styles from "./OrderInfo.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IProduct } from "@/types/API/IProduct";
import { toggleFavourites } from "@/store/slices/shop/favouritesSlice";
import { Link } from "react-router-dom";
import { HeartIcon } from "@/shared/ui/icons";
import CartButton from './../CartButton/CartButton';

interface AddToCartInfoProps {
   product: IProduct;
}

const OrderInfo = ({ product }: AddToCartInfoProps) => {
   const dispatch = useAppDispatch();

   const favourites = useAppSelector((state) => state.favourites.favourites);

   const handleAddToFavourites = () => {
      dispatch(toggleFavourites(product._id));
   };

   let cardDiscount = product.price * 0.89;
   cardDiscount = Number.isInteger(cardDiscount) ? cardDiscount : +cardDiscount.toFixed(1)

   const isInFavourites = favourites.includes(product._id);

   const favouriteBtnStyles = [
      styles.favouriteBtn,
      isInFavourites ? styles.inFavourites : "",
   ].join(" ");

   return (
      <div className={styles.order}>
         <div className={styles.content}>
            <div className={styles.info}>
               <div className={styles.cardDiscount}>
                  <p className={styles.discount}>{cardDiscount} ₽</p>
                  <p className={styles.cardDiscountLabel}>С картой YoDoggo</p>
               </div>
               <div className={styles.priceWrap}>
                  <p className={styles.price}>{product.price} ₽</p>
                  <p className={styles.priceWithoutCard}>(Без карты)</p>
               </div>
               <div className={styles.buttons}>
                  <CartButton product={product}/>
                  <Button
                     className={favouriteBtnStyles}
                     icon={<HeartIcon />}
                     onClick={handleAddToFavourites}
                  />
               </div>
            </div>

            <div className={styles.deliveryInfo}>
               <h4 className={styles.deliveryTitle}>Информация о доставке</h4>
               <Link to="" className={styles.setDataLink}>
                  Укажите информацию о пункте получения, чтобы увидеть время и
                  прочие данные
               </Link>
            </div>
         </div>
      </div>
   );
};

export default OrderInfo;

