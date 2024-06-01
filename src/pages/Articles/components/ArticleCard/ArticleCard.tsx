import { IArticle } from "@/types/API/IArticle";
import styles from "./ArticleCard.module.scss";
import { Link } from "react-router-dom";
import { formatDate } from "@/helpers/formatDate";
import LikeBtn from "@/components/UI/LikeBtn/LikeBtn";
import { APIEndpoints } from "@/constants/API";
import { MouseEvent } from "react";
import { useUserLink } from "@/hooks/useUserLink";
import { RoutesEnum } from "@/constants/routes";

const {Articles} = RoutesEnum

interface ArticleCardProps extends Omit<IArticle, "_id"> {
   id: string;
}

const ArticleCard = (props: ArticleCardProps) => {
   const { id, imgLink, title, datetime, login, isLiked, userId } = props;

   const userLink = useUserLink(userId)
   const date = formatDate(datetime, "date");

   const handleCardClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (event.target instanceof HTMLButtonElement ) {
         event.preventDefault()
      }
   };

   return (
      <div className={styles.content}>
         <Link to={userLink} className={styles.userLink}>
            @{login}
         </Link>
         <Link to={`/${Articles}/${id}`} className={styles.cardLink} onClick={handleCardClick}>
            <div className={styles.card}>
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
      </div>
   );
};

export default ArticleCard;
