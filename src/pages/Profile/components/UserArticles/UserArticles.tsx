import styles from "./UserArticles.module.scss";
import Loading from "@/components/Loading/Loading";
import {PageLink} from "@/shared/ui";
import {ArrowIcon} from "@/shared/ui/icons";
import { RoutesEnum } from "@/constants/routes";
import { useAppDispatch } from "@/hooks/redux";
import {
   setLiked,
   setUserId,
} from "@/store/slices/articles/articleFilterSlice";
import { useFetchAllArticlesQuery } from "@/services/articles";
import ArticleCard from "../ArticleCard/ArticleCard";

const { Articles } = RoutesEnum;

interface UserArticlesProps {
   userId: string;
   isCurrentUser: boolean;
}

const UserArticles = ({ userId, isCurrentUser }: UserArticlesProps) => {
   const { data, isLoading, isFetching, isError } = useFetchAllArticlesQuery({
      id: userId,
      limit: 4,
      userId,
   });

   const articles = data?.data;

   const dispatch = useAppDispatch();

   const handleLikedClick = () => {
      dispatch(setUserId(""));
      dispatch(setLiked(true));
   };

   const handleAllClick = () => {
      dispatch(setLiked(false));
      dispatch(setUserId(userId));
   };

    const articlesTitle = isCurrentUser ? 'Ваши статьи' : 'Статьи'
    const emptyArticlesTitle = isCurrentUser ? 'Вы ещё не писали статьи' : 'Пользователь ещё не писал статьи'

   if (isLoading || isFetching) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   if (!articles?.length) {
      return (
         <div className={styles.empty}>
            {emptyArticlesTitle}
         </div>
      )
   }

   return (
      articles && (
         <div className={styles.communityInfo}>
            <section className={styles.articles}>
               <header className={styles.header}>
                  <h2 className={styles.sectionTitle}>{articlesTitle}</h2>
                  {isCurrentUser && (
                     <PageLink
                        variant="none"
                        shadow={false}
                        to={`/${Articles}`}
                        onClick={handleLikedClick}
                     >
                        Понравившиеся
                     </PageLink>
                  )}
               </header>
               <div className={styles.articleBlock}>
                  <div className={styles.articleWrap}>
                     {articles.map((article) => (
                        <ArticleCard key={article._id} {...article}/>
                     ))}
                  </div>
                  <PageLink
                     to={`/${Articles}`}
                     className={styles.allBtn}
                     onClick={handleAllClick}
                  >
                     Все
                     <ArrowIcon />
                  </PageLink>
               </div>
            </section>
         </div>
      )
   );
};

export default UserArticles;
