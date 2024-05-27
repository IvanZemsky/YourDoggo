import { useFetchAllProductsQuery} from "@/services/YourDoggoService";
import { useAppSelector } from "./redux";

export const useProductFilter = () => {
   const filters = useAppSelector(state => state.productFilter);
   const data = useFetchAllProductsQuery(filters)

   return data

};