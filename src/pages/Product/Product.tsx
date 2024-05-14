import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./Product.module.scss";
import { useFetchProductByIdQuery } from "@/services/ProductService";
import { useParams } from "react-router";
import Loading from "@/components/Loading/Loading";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { parametersRu } from "@/constants/API";
import OrderInfo from './components/OrderInfo/OrderInfo';
import ProductImg from './components/ProductImg/ProductImg';
import { useMemo } from "react";

const Product = () => {
   const { id } = useParams();
   const {data: product, isLoading, isError} = useFetchProductByIdQuery(id as string);

   const parameters: string[][] = useMemo(
      () => product ? Object.entries(product.details).map(([key, value]) => [parametersRu[key] || key, value]) : [],
      [product]
   );

   if (isLoading) return <Loading />;
   if (isError) return <p>Ошибка :(</p>;

   return (
      <Wrapper>
         {product && (
            <div className={styles.content}>
               <ProductImg img={product.img}/>
               <ProductInfo
                  name={product.name}
                  description={product.description}
                  parameters={parameters}
               />
               <OrderInfo product={product}/>
            </div>
         )}
      </Wrapper>
   );
};

export default Product;
