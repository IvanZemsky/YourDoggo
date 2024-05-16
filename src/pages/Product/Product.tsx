import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Product.module.scss";
import {
   useFetchProductByIdQuery,
   useLazyFetchProductsByCategoryQuery,
} from "@/services/YourDoggoService";
import { useParams } from "react-router";
import Loading from "@/components/Loading/Loading";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { parametersRu } from "@/constants/API";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import ProductImg from "./components/ProductImg/ProductImg";
import { useEffect, useMemo } from "react";
import ProductCard from "../Shop/components/ProductCard/ProductCard";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Product = () => {
   const { id } = useParams();

   const {
      data: product,
      isLoading: isProductLoading,
      isError: isProductError,
   } = useFetchProductByIdQuery(id as string);

   useScrollToTop([product], 'smooth')

   const [
      fetchSimilarProducts,
      {
         data: similarProducts,
         isLoading: isSimilarLoading,
         isError: isSimilarError,
      },
   ] = useLazyFetchProductsByCategoryQuery();

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

   useEffect(() => {
      if (product) {
         fetchSimilarProducts(product.category);
      }
      window.scrollTo({top: 0, behavior: 'smooth'})
   }, [product]);

   if (isProductLoading) return <Loading />;
   if (isProductError) return <p>Ошибка :(</p>;

   return (
      <Wrapper>
         {product && (
            <div className={styles.content}>
               <div className={styles.product}>
                  <ProductImg img={product.img} />
                  <ProductInfo
                     name={product.name}
                     description={product.description}
                     parameters={parameters}
                  />
                  <OrderInfo product={product} />
               </div>
               <div className={styles.similar}>
                  <h2 className={styles.similarTitle}>Похожее</h2>
                  <div className={styles.similarProducts}>
                     {isSimilarLoading && <Loading/>}
                     {similarProducts &&
                        similarProducts.map((product) => (
                           <ProductCard
                              key={product._id}
                              id={product._id}
                              category={product.category}
                              name={product.name}
                              description={product.description}
                              price={product.price}
                              img={product.img}
                           />
                        ))}
                  </div>
               </div>
            </div>
         )}
      </Wrapper>
   );
};

export default Product;
