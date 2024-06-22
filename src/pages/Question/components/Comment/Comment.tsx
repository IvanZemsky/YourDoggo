import { IForumComment } from "@/types/API/IForumComment"
import styles from './Comment.module.scss'
import PageLink from "@/components/UI/PageLink/PageLink"
import { formatDate } from "@/utils/formatDate"
import { useUserLink } from "@/hooks/useUserLink"
import { memo } from "react"

interface CommentProps extends Omit<IForumComment, "_id"> {
   id: string
}

const Comment = memo(({id, userId, login, datetime, text}: CommentProps) => {

   const date = formatDate(datetime, "date")
   const userLink = useUserLink(userId)

  return (
    <div className={styles.comment}>
      <header className={styles.header}>
         <PageLink shadow={false} variant="none" to={userLink}>
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
})

export default Comment
