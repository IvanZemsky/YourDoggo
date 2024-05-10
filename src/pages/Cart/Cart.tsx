import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Cart.module.scss";
import { useAppSelector } from "@/hooks/redux";
import ProductCard from "../Shop/components/ProductCard/ProductCard";

const Cart = () => {
   const cartProducts = useAppSelector((state) => state.cart.products);
   console.log(cartProducts)

   return (
      <Wrapper>
         <div className={styles.content}>
            {cartProducts.map((product) => (
               <ProductCard
                  key={product._id}
                  id={product._id}
                  category={product.category}
                  name={product.name}
                  description={product.description}
                  price={product.price}
               />
            ))}
         </div>
      </Wrapper>
   );
};

export default Cart;
