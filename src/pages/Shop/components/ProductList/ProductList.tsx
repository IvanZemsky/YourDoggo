import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useProductFilter } from "@/hooks/useProductFilter";
import ProductsSkeleton from "../ProductsSkeleton/ProductsSkeleton";
import { Fragment } from "react/jsx-runtime";
import Button from "@/components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/slices/shop/productFilterSlice";
import { scrollToTop } from "@/helpers/scrollToTop";

const ProductList = () => {
   const dispatch = useAppDispatch();

   const { data, isLoading, isFetching, isError } = useProductFilter();

   const products = data?.data;
   const totalCount = data?.totalCount;

   const limit = useAppSelector((state) => state.productFilter.limit);
   const pageAmount = totalCount ? Math.ceil(totalCount / limit) : 1;

   const handlePageClick = (page: number) => {
      return () => {
         dispatch(setPage(page));
         scrollToTop()
      }
   };

   const pages: number[] = [];
   for (let i = 1; i < pageAmount + 1; i++) {
      pages.push(i);
   }

   if (isLoading || isFetching) return <ProductsSkeleton limit={12} />;
   if (isError) return <p>Ошибка :(</p>;

   return (
      <div className={styles.content}>
         {products?.length ? (
            <Fragment>
               <div className={styles.products}>
                  {products.map((product) => (
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
               <div className={styles.pages}>
                  {pages.map((page) => (
                     <Button key={page} onClick={handlePageClick(page)}>
                        {page}
                     </Button>
                  ))}
               </div>
            </Fragment>
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ProductList;
