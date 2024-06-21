import { useAppSelector } from "../../hooks/redux";
import { useFetchAllProductsQuery } from '@/services/shop';

export const useProductFilter = () => {
   const filters = useAppSelector(state => state.productFilter);
   const data = useFetchAllProductsQuery(filters)

   return data

};