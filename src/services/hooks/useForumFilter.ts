import { useFetchAllForumMessagesQuery } from "@/services/YourDoggoService";
import { useAppSelector } from "../../hooks/redux";

export const useForumFilter = () => {
   const filters = useAppSelector(state => state.forumFilter)
   const data = useFetchAllForumMessagesQuery(filters)

   return data
};