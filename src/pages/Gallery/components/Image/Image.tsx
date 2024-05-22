import styles from "./Image.module.scss";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import Button from "@/components/UI/Button/Button";
import { formatDate } from "@/helpers/formatDate";

interface ImageProps {
   id: string;
   user: string;
   title: string;
   tags: string[];
   img: string;
   datetime: any;
   login: string | undefined;
}

const Image = ({ id, user, title, tags, img, datetime, login }: ImageProps) => {
   const date = formatDate(datetime);

   return (
      <div className={styles.content}>
         <div className={styles.topPanel}>
            {login && <p className={styles.user}>@{login}</p>}
            <Button variant="none" className={styles.likeBtn}>
               <HeartIcon />
            </Button>
         </div>

         <img src={img} alt={title} />
         <div className={styles.info}>
            <div className={styles.date}>{date}</div>
            <p className={styles.title}>{title}</p>
         </div>
      </div>
   );
};

export default Image;
