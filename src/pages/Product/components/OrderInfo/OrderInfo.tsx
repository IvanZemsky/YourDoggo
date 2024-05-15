import Button from "@/components/UI/Button/Button";
import styles from "./OrderInfo.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addProduct } from "@/store/slices/shop/cartSlice";
import { IProduct } from "@/types/API/IProduct";
import ArrowIcon from "./../../../../components/UI/icons/ArrowIcon";
import PageLink from "@/components/UI/PageLink/PageLink";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import { toggleFavourites } from "@/store/slices/shop/favouritesSlice";
import { Link } from "react-router-dom";

interface AddToCartInfoProps {
   product: IProduct;
}

const AddToCartInfo = ({ product }: AddToCartInfoProps) => {
   const dispatch = useAppDispatch();

   const cartProducts = useAppSelector((state) => state.cart.products);
   const favourites = useAppSelector((state) => state.favourites.favourites);

   const isInCart = cartProducts.some(
      (cartProduct) => cartProduct._id === product._id
   );

   const handleAddToCart = () => {
      dispatch(addProduct(product));
   };

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
               <p className={styles.price}>{product.price} ₽</p>
               <div className={styles.buttons}>
                  {isInCart ? (
                     <PageLink to="/shop/cart" className={styles.cartLink}>
                        В корзине
                        <ArrowIcon />
                     </PageLink>
                  ) : (
                     <Button
                        className={styles.addBtn}
                        color="secondary"
                        variant="filled"
                        onClick={handleAddToCart}
                     >
                        Добавить в корзину
                     </Button>
                  )}
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

export default AddToCartInfo;

