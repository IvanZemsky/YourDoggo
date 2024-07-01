import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.scss";
import { IArticle } from "@/types/API/IArticle";
import { RoutesEnum } from "@/constants/routes";

const { Articles } = RoutesEnum

interface ArticleCardProps extends IArticle {}

const ArticleCard = ({_id,  imgLink, title }: ArticleCardProps) => {
   return (
      <Link to={`/${Articles}/${_id}`} className={styles.articleWrap}>
         <div className={styles.articleItem}>
            <div className={styles.imgWrap}>
               <img src={imgLink} alt='Обложка' />
            </div>
            <p className={styles.articleTitle}>{title}</p>
         </div>
      </Link>
   );
};

export default ArticleCard;
