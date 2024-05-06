import { useFetchAllProductsQuery } from "@/services/ProductService";
import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { categories } from "@/data/categories";

const ProductList = () => {
   const { data: products, error, isLoading } = useFetchAllProductsQuery();

   return (
      <section className={styles.products}>
         {products &&
            products.map((product) => (
               <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  category={categories[product.category]}
                  description={product.description}
                  price={product.price}
               />
            ))}
      </section>
   );
};

export default ProductList;
