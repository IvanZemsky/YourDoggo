import { useArticleFilter } from "@/hooks/useArticleFilter";
import styles from "./ArticleList.module.scss";
import Loading from "@/components/Loading/Loading";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = () => {
   const { data: articles, isLoading, isError } = useArticleFilter();

   if (isLoading) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      <div className={styles.content}>
         {articles?.length ? (
            articles.map((article) => (
               <ArticleCard
                  key={article._id}
                  id={article._id}
                  {...article}
               />
            ))
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ArticleList;
