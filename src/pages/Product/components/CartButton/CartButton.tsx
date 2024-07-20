import { PageLink, Button } from "@/components/UI";
import styles from "./CartButton.module.scss";
import { ArrowIcon } from "@/components/UI/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addProduct } from "@/store/slices/shop/cartSlice";
import { IProduct } from "@/types/API/IProduct";

interface CartButton {
   product: IProduct
}

const CartButton = ({ product }: CartButton) => {
   const dispatch = useAppDispatch()

   const cartProducts = useAppSelector((state) => state.cart.products);

   const isInCart = cartProducts.some(
      (cartProduct) => cartProduct._id === product._id
   );

   const handleAddToCart = () => {
      dispatch(addProduct(product));
   };

   return (
      <>
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
      </>
   );
};

export default CartButton;
