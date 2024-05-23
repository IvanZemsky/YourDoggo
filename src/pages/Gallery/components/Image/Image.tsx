import styles from "./Image.module.scss";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import Button from "@/components/UI/Button/Button";
import { formatDate } from "@/helpers/formatDate";
import { useCallback } from "react";
import { MouseEvent } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { openModal } from "@/store/slices/modalSlice";
import ImageInfo from './../../ImageInfo/ImageInfo';

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
   const dispatch = useAppDispatch();

   const modalContent = `imageModal${id}`

   const date = formatDate(datetime);

   const handleLikeClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      // logic
   }, [])

   const handleImageClick = useCallback(() => {
      dispatch(openModal(modalContent))
   }, [])

   return (
      <div className={styles.content} onClick={handleImageClick}>
         <div className={styles.topPanel}>
            {login && <p className={styles.user}>@{login}</p>}
            <Button variant="none" className={styles.likeBtn} onClick={handleLikeClick}>
               <HeartIcon />
            </Button>
            <ImageInfo id={id} title={title}/>
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
