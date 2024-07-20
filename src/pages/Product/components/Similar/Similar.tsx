import {ArrowIcon} from "@/components/UI/icons";
import ProductCard from "@/pages/Shop/components/ProductCard/ProductCard";
import ProductsSkeleton from "@/pages/Shop/components/ProductsSkeleton/ProductsSkeleton";
import { Link } from "react-router-dom";
import styles from "./Similar.module.scss";
import { useFetchProductsByCategoryQuery } from "@/services/shop";
import { categories } from "@/data/categories";
import { setCategory } from "@/store/slices/shop/productFilterSlice";
import { useAppDispatch } from "@/hooks/redux";
import { Category } from "@/types/shop";
import { scrollToTop } from "@/utils/scrollToTop";

interface SimilarProps {
  id: string
  productCategory: string
}

const Similar = ({id, productCategory}: SimilarProps) => {
   const dispatch = useAppDispatch()

   const {data: products, isLoading, isError} = useFetchProductsByCategoryQuery(productCategory)

   const handleCardClick = () => {
      scrollToTop('smooth')
   }

   const handleMoreClick = () => {
      const currentCategory: Category = categories.find(category => category.name === productCategory)! // TO HELPER
      dispatch(setCategory(currentCategory.name))
   }

   if (isError) {
      return <p>Ошибка!</p>
   }

   return (
      <div className={styles.similar}>
         <h2 className={styles.similarTitle}>Похожее</h2>
         {isLoading && <ProductsSkeleton limit={10} />}
         {products && (
            <div className={styles.similarProducts}>
               {products.map((product) => {
                  return (
                     product._id !== id && (
                        <ProductCard
                           key={product._id}
                           onClick={handleCardClick}
                           id={product._id}
                           category={product.category}
                           name={product.name}
                           description={product.description}
                           price={product.price}
                           img={product.img}
                        />
                     )
                  );
               })}
               <Link
                  to="/shop"
                  className={styles.more}
                  onClick={handleMoreClick}
               >
                  <p className={styles.moreLabel}>Больше</p>
                  <ArrowIcon />
               </Link>
            </div>
         )}
      </div>
   );
};

export default Similar;
