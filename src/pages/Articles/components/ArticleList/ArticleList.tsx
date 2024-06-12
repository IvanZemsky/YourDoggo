import { useArticleFilter } from "@/hooks/useArticleFilter";
import styles from "./ArticleList.module.scss";
import Loading from "@/components/Loading/Loading";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Fragment } from "react";
import PageBtns from "@/pages/Shop/components/PageBtns/PageBtns";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/slices/articles/articleFilterSlice";
import { scrollToTop } from "@/helpers/scrollToTop";

const ArticleList = () => {
   const { data, isLoading, isFetching, isError } = useArticleFilter();

   const articles = data?.data;
   const totalCount = data?.totalCount;

   const page = useAppSelector((state) => state.articleFilter.page)!;

   const dispatch = useAppDispatch()

   const limit = useAppSelector((state) => state.articleFilter.limit) || 10;
   const pageAmount = totalCount ? Math.ceil(totalCount / limit) : 1;

   const handlePageClick = (page: number) => {
      return () => {
         dispatch(setPage(page));
         scrollToTop();
      };
   };

   if (isLoading || isFetching) {
      return <Loading />;
   }

   if (isError) {
      return <p>Ошибка</p>;
   }

   return (
      <div className={styles.content}>
         {articles?.length ? (
            <Fragment>
               <div className={styles.articles}>
                  {articles.map((article) => (
                     <ArticleCard
                        key={article._id}
                        id={article._id}
                        {...article}                   
                     />
                  ))}
               </div>
               <div className={styles.pages}>
                  <PageBtns
                     pageAmount={pageAmount}
                     currentPage={page}
                     handleClick={handlePageClick}
                     activeStyle={styles.active}
                  />
               </div>
            </Fragment>
         ) : (
            <p>Ничего не найдено</p>
         )}
      </div>
   );
};

export default ArticleList;
