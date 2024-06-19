import { useParams } from "react-router";
import styles from "./Question.module.scss";
import { useFetchForumMessageByIdQuery } from "@/services/YourDoggoService";
import Loading from "@/components/Loading/Loading";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { RoutesEnum } from "@/constants/routes";
import QuestionContent from './components/QuestionContent/QuestionContent';
import CommentList from './components/CommentsList/CommentList';

const { User } = RoutesEnum;

const Question = () => {
   const { id } = useParams();

   const {
      data: message,
      isLoading,
      isFetching,
      isError,
   } = useFetchForumMessageByIdQuery(id as string);

   if (isLoading || isFetching) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      message && (
         <Wrapper>
            <div className={styles.content}>
               <QuestionContent id={message._id} {...message}/>
               <CommentList id={message._id} />
            </div>
         </Wrapper>
      )
   );
};

export default Question;
