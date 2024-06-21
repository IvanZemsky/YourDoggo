import { useFetchForumCommentsByMessageQuery,} from "@/services/forum";
import { useAppSelector } from "../../hooks/redux";

export const useForumCommentFilter = (id: string) => {
   const filters = useAppSelector(state => state.commentFilter)
   const data = useFetchForumCommentsByMessageQuery({...filters, id});

   return data
};