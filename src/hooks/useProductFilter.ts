import { useLazyFetchAllProductsQuery} from "@/services/YourDoggoService";
import { useAppSelector } from "./redux";
import { useEffect } from "react";

export const useProductFilter = () => {
   const category = useAppSelector(state => state.productFilter.category);
   const textQuery = useAppSelector(state => state.productFilter.textQuery);
   const minPrice = useAppSelector(state => state.productFilter.minPrice);
   const maxPrice = useAppSelector(state => state.productFilter.maxPrice);

   const [fetchAll, productsData] = useLazyFetchAllProductsQuery()

   const filter = () => {
      fetchAll({textQuery, category, minPrice, maxPrice})
   }

   useEffect(() => {
      filter()
   }, [category])

   return [filter, productsData] as const

};