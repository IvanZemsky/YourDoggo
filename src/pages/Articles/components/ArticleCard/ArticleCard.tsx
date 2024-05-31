import { IArticle } from "@/types/API/IArticle";
import styles from "./ArticleCard.module.scss";
import { Link } from "react-router-dom";
import { formatDate } from "@/helpers/formatDate";
import LikeBtn from "@/components/UI/LikeBtn/LikeBtn";
import { APIEndpoints } from "@/constants/API";
import { MouseEvent } from 'react';

interface ArticleCardProps extends Omit<IArticle, "_id"> {
   id: string;
}

const ArticleCard = (props: ArticleCardProps) => {
   const { id, imgLink, title, datetime, login, isLiked, } = props;

   const date = formatDate(datetime, "date");

   const handleCardClick =(event: MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation()
   };

   return (
      <Link to="" onClick={handleCardClick}>
         <div className={styles.content}>
            <div className={styles.imgWrap}>
               <img src={imgLink} alt="Превью" />
            </div>
            <div className={styles.info}>
               <p className={styles.title}>{title}</p>
               <div className={styles.panel}>
                  <LikeBtn
                     likedItemId={id}
                     isLiked={isLiked}
                     likedStyles={styles.liked}
                     unlikedStyles={styles.likeBtn}
                     endpoint={APIEndpoints.ARTICLES}
                     shadow={false}
                  />
                  <time className={styles.published}>{date}</time>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default ArticleCard;
