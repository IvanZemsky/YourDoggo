import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useProductFilter } from "@/services/hooks/useProductFilter";
import ProductsSkeleton from "../ProductsSkeleton/ProductsSkeleton";
import { Fragment } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/slices/shop/productFilterSlice";
import { scrollToTop } from "@/utils/scrollToTop";
import {PageBtns} from "@/shared/ui";

const ProductList = () => {
   const dispatch = useAppDispatch();

   const { data, isLoading, isFetching, isError } = useProductFilter();

   const page = useAppSelector((state) => state.productFilter.page);
   const products = data?.data;
   const totalCount = data?.totalCount;

   const limit = useAppSelector((state) => state.productFilter.limit);
   const pageAmount = totalCount ? Math.ceil(totalCount / limit) : 1;

   const handlePageClick = (page: number) => {
      return () => {
         dispatch(setPage(page));
         scrollToTop();
      };
   };

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
                  <PageBtns
                     pageAmount={pageAmount}
                     currentPage={page}
                     handleClick={handlePageClick}
                  />
               </div>
            </Fragment>
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ProductList;
