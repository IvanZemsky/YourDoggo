import { useLazyFetchAllProductsQuery, useLazyFetchProductByCategoryQuery } from "@/services/ProductService";
import { useAppSelector } from "./redux";
import { useEffect } from "react";

export const useProductFilter = () => {
   const category = useAppSelector(state => state.productFilter.category);
   const [fetchAllProducts, allProducts] = useLazyFetchAllProductsQuery();
   const [fetchProductsByCategory, productsByCategory] = useLazyFetchProductByCategoryQuery();

   useEffect(() => {
      if (category === 'all') {
         fetchAllProducts();
      } else {
         fetchProductsByCategory(category);
      }
   }, [category]);

   return category === 'all' ? allProducts : productsByCategory;
};