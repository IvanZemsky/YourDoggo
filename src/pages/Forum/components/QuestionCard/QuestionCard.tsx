import { IForumMessage } from "@/types/API/IForumMessage"
import styles from './QuestionCard.module.scss'
import PageLink from "@/components/UI/PageLink/PageLink"
import { RoutesEnum } from "@/constants/routes"
import { Link } from "react-router-dom"
import Button from "@/components/UI/Button/Button"
import { formatDate } from "@/helpers/formatDate"

const {Forum, User} = RoutesEnum

interface QuestionCardProps extends Omit<IForumMessage, "_id"> {
   id: string
}

const QuestionCard = ({id, title, description, datetime, userId, login}: QuestionCardProps) => {
  const date = formatDate(datetime, "text")

  return (
    <div className={styles.card}>
      <p className={styles.title}>
         {title}
      </p>
      <div className={styles.info}>
         <PageLink variant="none" shadow={false} to={`/${User}/${userId}`}>@{login}</PageLink>
         <time dateTime={datetime}>{date}</time>
      </div>
      <PageLink to={`/${Forum}/${id}`} shadow={false} className={styles.link}>Перейти</PageLink>
    </div>
  )
}

export default QuestionCard
