import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useProductFilter } from "@/hooks/useProductFilter";
import Loading from "@/components/Loading/Loading";
import { useEffect } from "react";
import { IProduct } from "@/types/API/IProduct";
import ProductsSkeleton from "../ProductsSkeleton/ProductsSkeleton";

interface ProductListProps {
   data: IProduct[] | undefined
   isError: boolean
   isLoading: boolean
}

const ProductList = ({data: products, isLoading, isError}: ProductListProps) => {

   if (isLoading) return <ProductsSkeleton limit={12} />;
   if (isError) return <p>Ошибка :(</p>;

   return (
      <section className={styles.products}>
         {products?.length ? 
            products.map((product) => (
               <ProductCard
                  key={product._id}
                  id={product._id}
                  category={product.category}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  img={product.img}
               />
            )) : (<p>Ничего не найдено</p>)}
      </section>
   );
};

export default ProductList;
