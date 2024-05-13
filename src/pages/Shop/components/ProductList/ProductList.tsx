import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useProductFilter } from "@/hooks/useProductFilter";
import Loading from "@/components/Loading/Loading";
import { useEffect } from "react";
import { IProduct } from "@/types/API/IProduct";

interface ProductListProps {
   data: IProduct[] | undefined
   isError: boolean
   isLoading: boolean
}

const ProductList = ({data: products, isLoading, isError}: ProductListProps) => {

   if (isLoading) return <Loading />;
   if (isError) return <p>Ошибка :(</p>;

   return (
      <section className={styles.products}>
         {products &&
            products.map((product) => (
               <ProductCard
                  key={product._id}
                  id={product._id}
                  category={product.category}
                  name={product.name}
                  description={product.description}
                  price={product.price}
               />
            ))}
      </section>
   );
};

export default ProductList;
