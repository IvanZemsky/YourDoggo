import {Wrapper} from "@/components/UI";
import styles from "./Product.module.scss";
import { useFetchProductByIdQuery } from "@/services/shop";
import { useParams } from "react-router";
import Loading from "@/components/Loading/Loading";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { parametersRu } from "@/constants/API";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import ProductImg from "./components/ProductImg/ProductImg";
import Similar from "./components/Similar/Similar";
import { useMemo } from "react";

const Product = () => {
   const { id } = useParams();

   const {
      data: product,
      isLoading: isProductLoading,
      isError: isProductError,
   } = useFetchProductByIdQuery(id as string);

   const parameters: string[][] = useMemo(
      () =>
         product
            ? Object.entries(product.details).map(([key, value]) => [
                 parametersRu[key] || key,
                 value,
              ])
            : [],
      [product]
   );

   if (isProductLoading) return <Loading />;
   if (isProductError) return <p>Ошибка :(</p>;

   return (
      <Wrapper>
         {product && (
            <div className={styles.content}>
               <div className={styles.product}>
                  <div className={styles.info}>
                     <ProductImg img={product.img} />
                     <ProductInfo
                        name={product.name}
                        description={product.description}
                        parameters={parameters}
                     />
                  </div>
                  <OrderInfo product={product} />
               </div>
               <Similar id={product._id} productCategory={product.category} />
            </div>
         )}
      </Wrapper>
   );
};

export default Product;
