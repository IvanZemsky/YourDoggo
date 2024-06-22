import styles from "./QuestionList.module.scss";
import Loading from "@/components/Loading/Loading";
import { Fragment } from "react";
import PageBtns from "@/components/UI/PageBtns/PageBtns";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage } from "@/store/slices/forum/forumFilter";
import { scrollToTop } from "@/utils/scrollToTop";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useForumFilter } from "@/services/hooks/useForumFilter";

const ArticleList = () => {
   const { data, isLoading, isFetching, isError } = useForumFilter();

   const questions = data?.data;
   const totalCount = data?.totalCount;

   const page = useAppSelector((state) => state.forumFilter.page) || 1;

   const dispatch = useAppDispatch()

   const limit = useAppSelector((state) => state.forumFilter.limit) || 9;
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
         {questions?.length ? (
            <Fragment>
               <div className={styles.questions}>
                  {questions.map((question) => (
                     <QuestionCard
                        key={question._id}
                        id={question._id}
                        {...question}                     
                     />
                  ))}
               </div>
               <div className={styles.pages}>
                  <PageBtns
                     pageAmount={pageAmount}
                     currentPage={page}
                     handleClick={handlePageClick}
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