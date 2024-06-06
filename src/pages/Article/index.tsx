import { useFetchArticleByIdQuery } from "@/services/YourDoggoService";
import styles from "./Article.module.scss";
import { useParams } from "react-router";
import Loading from "./../../components/Loading/Loading";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { useUserLink } from "@/hooks/useUserLink";
import { formatDate } from "@/helpers/formatDate";
import LikeBtn from "@/components/UI/LikeBtn/LikeBtn";
import LikeCounter from "@/components/UI/LikeCounter/LikeCounter";
import { APIEndpoints } from "@/constants/API";
import { useAppSelector } from "@/hooks/redux";
import { useEffect, useRef } from "react";
import Tags from "@/components/UI/Tags/Tags";

const { ARTICLES } = APIEndpoints;

const Article = () => {
   const { id } = useParams();
   const currentUserId = useAppSelector((state) => state.auth.userId);
   const {
      data: article,
      isLoading,
      isError,
   } = useFetchArticleByIdQuery({ id, userId: currentUserId, userLogin: true });

   const textRef = useRef<HTMLParagraphElement>(null);

   useEffect(() => {
      if (textRef.current && article) {
         textRef.current.innerHTML = article.text;
      }
   }, [textRef, article]);

   const userLink = useUserLink(article?.userId);
   let date = article ? formatDate(article.datetime, "text") : "";

   if (isLoading) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      article && (
         <Wrapper additionalStyles={styles.wrapper}>
            <div className={styles.content}>
               <header className={styles.header}>
                  <div className={styles.titleWrap}>
                     <h1 className={styles.title}>{article.title}</h1>
                     <Link to={userLink} className={styles.userLink}>
                        @{article.login}
                     </Link>
                  </div>
                  <time
                     dateTime={article.datetime}
                     className={styles.published}
                  >
                     Опубликовано {date}
                  </time>
               </header>
               <p className={styles.text} ref={textRef}></p>

               {!!article.tags.length && (
                  <div className={styles.tags}>
                     <Tags tags={article.tags} />
                  </div>
               )}

               <div className={styles.likes}>
                  <LikeBtn
                     likedItemId={id as string}
                     isLiked={article.isLiked}
                     likedStyles={styles.liked}
                     unlikedStyles={styles.likeBtn}
                     endpoint={ARTICLES}
                  />
                  <LikeCounter
                     id={id as string}
                     likes={article.likes}
                     isLiked={article.isLiked}
                     className={styles.likeCounter}
                     endpoint={ARTICLES}
                  />
               </div>
            </div>
         </Wrapper>
      )
   );
};

export default Article;
