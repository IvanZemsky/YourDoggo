import { IForumComment } from "@/types/API/IForumComment"
import styles from './Comment.module.scss'
import PageLink from "@/components/UI/PageLink/PageLink"
import { RoutesEnum } from "@/constants/routes"
import { formatDate } from "@/helpers/formatDate"

const {User} = RoutesEnum

interface CommentProps extends Omit<IForumComment, "_id"> {
   id: string
}

const Comment = ({id, userId, login, datetime, text}: CommentProps) => {

   const date = formatDate(datetime, "date")

  return (
    <div className={styles.comment}>
      <header className={styles.header}>
         <PageLink shadow={false} variant="none" to={`${User}/${userId}`}>
            {login}
         </PageLink>
         <time dateTime={datetime} className={styles.published}>
            {date}
         </time>
      </header>
      <p className={styles.text}>
         {text}
      </p>
    </div>
  )
}

export default Comment
