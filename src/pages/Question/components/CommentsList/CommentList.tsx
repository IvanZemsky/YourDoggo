import { useFetchForumCommentsByMessageQuery } from "@/services/YourDoggoService";
import styles from "./CommentList.module.scss";
import Loading from "@/components/Loading/Loading";
import Comment from "../Comment/Comment";

interface CommentListProps {
   forumMessageId: string;
}

const CommentList = ({ forumMessageId }: CommentListProps) => {
   const { data, isLoading, isFetching, isError } = useFetchForumCommentsByMessageQuery({ id: forumMessageId });
   
   const comments = data?.data;
   const totalCount = data?.totalCount;

   console.log(comments);

   if (isLoading || isFetching) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      !!comments?.length && (
         <div className={styles.commentList}>
            {comments.map((comment) => (
               <Comment id={comment._id} key={comment._id} {...comment} />
            ))}
         </div>
      )
   );
};

export default CommentList;
