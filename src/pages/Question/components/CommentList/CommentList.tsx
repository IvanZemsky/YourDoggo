import styles from "./CommentList.module.scss";
import Loading from "@/components/Loading/Loading";
import Comment from "../Comment/Comment";
import { Fragment, useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/slices/forum/commentFilter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useForumCommentFilter } from "@/services/hooks/useForumCommentFilter";
import { useCreateForumCommentMutation } from "@/services/forum";

interface CommentListProps {
   forumMessageId: string;
}

const CommentList = ({ forumMessageId }: CommentListProps) => {
   const dispatch = useAppDispatch();
   const { data, isLoading, isFetching, isError } = useForumCommentFilter(forumMessageId);
   const [_, { data: newComment }] = useCreateForumCommentMutation({
      fixedCacheKey: "newComment",
   });

   const comments = data?.data;
   const totalCount = data?.totalCount;
   const limit = useAppSelector((state) => state.commentFilter.limit) || 10;
   const page = useAppSelector((state) => state.commentFilter.page);
   const triggerRef = useRef(null);
   const isLoadedAll = totalCount && Math.ceil(totalCount / limit) <= page;

   let login = useAppSelector(state => state.auth.userLogin) || ''

   const loadData = useCallback(() => {
      if (!isLoadedAll && !isLoading && !isFetching) {
         dispatch(setPage());
      }
   }, [isLoadedAll, isLoading, isFetching, dispatch]);

   useIntersectionObserver(triggerRef, loadData);

   if (isLoading && page === 1) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      <div className={styles.content}>
         <div className={styles.comments}>
            {newComment && <Comment id={newComment._id} login={login} {...newComment} />}
            {comments?.length ? (
               <Fragment>
                  {comments.map((comment) => (
                     <Comment key={comment._id} id={comment._id} {...comment} />
                  ))}

                  {isFetching && page !== 1 ? (
                     <div className={styles.loader}>
                        <Loading />
                     </div>
                  ) : (
                     <div ref={triggerRef} className={styles.trigger}></div>
                  )}
               </Fragment>
            ) : (
               <p>Это сообщение пока не получило ответа. Будьте первым!</p>
            )}
         </div>
      </div>
   );
};

export default CommentList;
