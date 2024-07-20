import {PageLink} from "@/components/UI";
import styles from "./QuestionContent.module.scss";
import CommentForm from "../CommentForm/CommentForm";
import { IForumMessage } from "./../../../../types/API/IForumMessage";
import { formatDate } from "@/utils/formatDate";
import { useUserLink } from "@/hooks/useUserLink";
import { useAppSelector } from "@/hooks/redux";

interface QuestionContentProps extends Omit<IForumMessage, "_id"> {
   id: string;
}

const QuestionContent = ({
   id,
   title,
   login,
   description,
   datetime,
   userId,
}: QuestionContentProps) => {
   const date = formatDate(datetime, "text");
   const userLink = useUserLink(userId);

   const currentUserId = useAppSelector((state) => state.auth.userId);

   return (
      <div className={styles.wrap}>
         <div className={styles.content}>
            <header className={styles.header}>
               <h1 className={styles.title}>{title}</h1>
               <PageLink to={userLink} variant="none" shadow={false}>
                  {login}
               </PageLink>
            </header>
            <time dateTime={datetime} className={styles.published}>
               Опубликовано {date}
            </time>
            <p className={styles.desc}>{description}</p>
            <CommentForm userId={currentUserId} forummessageId={id} />
         </div>
      </div>
   );
};

export default QuestionContent;
