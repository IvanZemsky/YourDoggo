import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Product.module.scss";
import { useFetchProductByIdQuery } from "@/services/ProductService";
import { useParams } from "react-router";
import Loading from "@/components/Loading/Loading";
import Button from '@/components/UI/Button/Button';
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addProduct } from "@/store/slices/shop/cartSlice";

const Product = () => {
   const { id } = useParams();
   const {data: product, isLoading, isError} = useFetchProductByIdQuery(id as string);

   const dispatch = useAppDispatch()

   const cartProducts = useAppSelector(state => state.cart.products)
   const isInCart = cartProducts.some(product => product._id === id);

   const handleAddBtn =() => {
      dispatch(addProduct(product))
   }

   return (
      <Wrapper>
         {isLoading && <Loading />}
         {isError && <p>Ошибка :(</p>}
         {product && (
          <div className={styles.content}>
            <div className={styles.imgWrap}>
               <img
                  src="https://images.unsplash.com/photo-1601306187938-754636bc78c2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Изображение товара"
               />
            </div>
            <div className="info">
               <h2 className={styles.name}>{product.name}</h2>
               <p className={styles.desc}>{product.description}</p>
               <Link to="/shop/cart">Корзина</Link>
            </div>
            <div className={styles.order}>
               <p className={styles.price}>{product.price} ₽</p>
               <div className={styles.buttons}>
                  {isInCart ? <p>В корзине</p> : <Button color="secondary" variant="filled" onClick={handleAddBtn}>В корзину</Button>}
               </div>

               {/* {"Избранное"} */}
            </div>
          </div>
         )}
         
      </Wrapper>
   );
};

export default Product;
