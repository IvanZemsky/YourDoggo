import { useFetchAllArticlesQuery } from "@/services/YourDoggoService";
import { useAppSelector } from "./redux";

export const useArticleFilter = () => {
   const filters = useAppSelector(state => state.articleFilter)
   const userId = useAppSelector(state => state.auth.userId)
   const data = useFetchAllArticlesQuery({...filters, userId});

   return data
};