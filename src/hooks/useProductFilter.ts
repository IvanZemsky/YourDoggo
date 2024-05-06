import { useFetchAllProductsQuery, useFetchProductByCategoryQuery } from "@/services/ProductService";
import { IProduct } from "@/types/API/IProduct"
import { useAppSelector } from "./redux";

export const useProductFilter = () => {
   const category = useAppSelector(state => state.productFilter.category);
   let data;

   if (category === 'all') {
      data = useFetchAllProductsQuery();
   } else {
      data = useFetchProductByCategoryQuery(category);
   }

   return data;
}