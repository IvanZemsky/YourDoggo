import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Product.module.scss";
import { useFetchProductByIdQuery } from "@/services/ProductService";
import { useParams } from "react-router";
import Loading from "@/components/Loading/Loading";
import Button from "@/components/UI/Button/Button";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addProduct } from "@/store/slices/shop/cartSlice";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { parametersRu } from "@/constants/API";

const Product = () => {
   const { id } = useParams();
   const {data: product, isLoading, isError} = useFetchProductByIdQuery(id as string);

   console.log(product)

   const dispatch = useAppDispatch();

   const parameters: string[][] = useMemo(
      () => product ? Object.entries(product.details).map(([key, value]) => [parametersRu[key] || key, value]) : [],
      [product]
   );

   console.log(parameters)


   const cartProducts = useAppSelector((state) => state.cart.products);
   const isInCart = cartProducts.some((product) => product._id === id);

   const handleAddBtn = () => {
      dispatch(addProduct(product));
   };

   if (isLoading) return <Loading />;
   if (isError) return <p>Ошибка :(</p>;

   return (
      <Wrapper>
         {product && (
            <div className={styles.content}>
               <div className={styles.imgWrap}>
                  <img
                     src="https://images.unsplash.com/photo-1601306187938-754636bc78c2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="Изображение товара"
                  />
               </div>
               <ProductInfo
                  name={product.name}
                  description={product.description}
                  parameters={parameters}
               />
               <div className={styles.order}>
                  <p className={styles.price}>{product.price} ₽</p>
                  <div className={styles.buttons}>
                     {isInCart ? (
                        <p>В корзине</p>
                     ) : (
                        <Button
                           color="secondary"
                           variant="filled"
                           onClick={handleAddBtn}
                        >
                           В корзину
                        </Button>
                     )}
                  </div>

                  {/* {"Избранное"} */}
               </div>
            </div>
         )}
      </Wrapper>
   );
};

export default Product;
