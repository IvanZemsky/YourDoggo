import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useProductFilter } from "@/hooks/useProductFilter";
import Loading from "@/components/Loading/Loading";

const ProductList = () => {
   const { data: products, error, isLoading } = useProductFilter()

   return (
      <section className={styles.products}>
         {isLoading && <Loading/>}
         {error && <p>Ошибка :(</p>}
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
