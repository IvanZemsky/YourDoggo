import PageLink from "@/components/UI/PageLink/PageLink";
import User from "@/pages/User";
import styles from './QuestionContent.module.scss'
import CommentForm from "../CommentForm/CommentForm";
import { IForumMessage } from './../../../../types/API/IForumMessage';
import { formatDate } from "@/helpers/formatDate";

interface QuestionContentProps extends Omit<IForumMessage, "_id"> {
   id: string
}

const QuestionContent = ({id, title, login, description, datetime, userId}: QuestionContentProps) => {

   const date = formatDate(datetime, "text")
   
   return (
      <div className={styles.wrap}>
         <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <PageLink
               to={`/${User}/${userId}`}
               variant="none"
               shadow={false}
            >
               {login}
            </PageLink>
         </header>
         <time dateTime={datetime} className={styles.published}>
            Опубликовано {date}
         </time>
         <p className={styles.desc}>{description}</p>
         <CommentForm userId={userId} forummessageId={id} />
      </div>
   );
};

export default QuestionContent;
