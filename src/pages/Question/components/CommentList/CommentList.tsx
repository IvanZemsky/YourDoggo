import styles from "./CommentList.module.scss";
import Loading from "@/components/Loading/Loading";
import Comment from "../Comment/Comment";
import { Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/slices/forum/commentFilter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useForumCommentFilter } from "@/services/hooks/useForumCommentFilter";

interface CommentListProps {
   forumMessageId: string;
}

const CommentList = ({ forumMessageId }: CommentListProps) => {
   const { data, isLoading, isFetching, isError } = useForumCommentFilter(forumMessageId);

   const dispatch = useAppDispatch();

   const comments = data?.data;
   const totalCount = data?.totalCount!;

   const limit = useAppSelector((state) => state.commentFilter.limit) || 10;
   const page = useAppSelector((state) => state.commentFilter.page)!;
   const triggerRef = useRef<HTMLDivElement>(null);

   const isLoadedAll = Math.ceil(totalCount / limit) <= page;

   const loadData = () => {
      if (!isLoadedAll) {
         dispatch(setPage());
      }
   };

   useIntersectionObserver(triggerRef, loadData);

   console.log(comments);

   if ((isLoading || isFetching) && page === 1) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
         <div className={styles.content}>
            {comments?.length ? (
               <div className={styles.comments}>
                  {comments.map((comment) => (
                     <Comment key={comment._id} id={comment._id} {...comment} />
                  ))}
                  {(isLoading || isFetching) && page !== 1 ? (
               <div className={styles.loader}>
                  <Loading />
               </div>
            ) : (
               <div ref={triggerRef} className={styles.trigger}></div>
            )}
               </div>
            ) : (
               <p>Это сообщение пока не получило ответа. Будьте первым!</p>
            )}
            
         </div>
   );
};

export default CommentList;
