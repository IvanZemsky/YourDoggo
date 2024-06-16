import { useParams } from "react-router";
import styles from "./Question.module.scss";
import { useFetchForumMessageByIdQuery } from "@/services/YourDoggoService";
import Loading from "@/components/Loading/Loading";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import PageLink from "@/components/UI/PageLink/PageLink";
import { RoutesEnum } from "@/constants/routes";
import { formatDate } from "@/helpers/formatDate";

const { User } = RoutesEnum;

const Question = () => {
   const { id } = useParams();

   const {
      data: message,
      isLoading,
      isFetching,
      isError,
   } = useFetchForumMessageByIdQuery(id as string);

   const date = message ? formatDate(message.datetime, "text") : null;

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
               <header className={styles.header}>
                  <h1 className={styles.title}>{message.title}</h1>
                  <PageLink
                     to={`/${User}/${message.userId}`}
                     variant="none"
                     shadow={false}
                  >
                     {message.login}
                  </PageLink>
               </header>
               <time dateTime={message.datetime} className={styles.published}>
                  Опубликовано {date}
               </time>
               <p className={styles.desc}>{message.description}</p>
            </div>
         </Wrapper>
      )
   );
};

export default Question;
