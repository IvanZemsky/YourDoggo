import { useFetchForumCommentsByMessageQuery } from "@/services/YourDoggoService";
import styles from "./CommentList.module.scss";
import Loading from "@/components/Loading/Loading";
import Comment from "../Comment/Comment";

interface CommentListProps {
   id: string;
}

const CommentList = ({ id }: CommentListProps) => {
   const { data, isLoading, isFetching, isError } = useFetchForumCommentsByMessageQuery({ id });
   
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
               <Comment id={id} {...comment} />
            ))}
         </div>
      )
   );
};

export default CommentList;
