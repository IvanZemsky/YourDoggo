import { useFetchAllArticlesQuery } from "@/services/articles";
import { useAppSelector } from "../../hooks/redux";

export const useArticleFilter = () => {
   const filters = useAppSelector(state => state.articleFilter)
   const authUserId = useAppSelector(state => state.auth.userId)

   const data = useFetchAllArticlesQuery({...filters, authUserId});

   return data
};