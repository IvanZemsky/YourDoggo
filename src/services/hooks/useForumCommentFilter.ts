import { useFetchForumCommentsByMessageQuery,} from "@/services/forum";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { resetPage, setForumMessageId } from "@/store/slices/forum/commentFilter";
import { useEffect } from "react";

export const useForumCommentFilter = (forumMessageId: string) => {
   const filters = useAppSelector(state => state.commentFilter)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (forumMessageId !== filters.forumMessageID) {
         dispatch(resetPage())
         dispatch(setForumMessageId(forumMessageId))
      }
   }, [])

   const data = useFetchForumCommentsByMessageQuery({...filters, id: forumMessageId});

   return data
};