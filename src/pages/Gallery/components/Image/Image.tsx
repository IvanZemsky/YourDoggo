import styles from "./Image.module.scss";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import Button from "@/components/UI/Button/Button";
import { formatDate } from "@/helpers/formatDate";
import { useCallback } from "react";
import { MouseEvent } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { openModal } from "@/store/slices/modalSlice";
import ImageInfo from "../../../../components/Modals/ImageInfo/ImageInfo";
import { RoutesEnum } from "@/constants/routes";
import { Link } from "react-router-dom";

interface ImageProps {
   id: string;
   user: string;
   title: string;
   tags: string[];
   img: string;
   datetime: any;
   login: string | undefined;
   hasModal?: boolean;
}

const { User } = RoutesEnum;

const Image = (props: ImageProps) => {
   const { id, title, img, datetime, user: userId, login, hasModal = true } = props;

   const dispatch = useAppDispatch();

   const modalContent = `imageModal${id}`;

   const date = formatDate(datetime);

   const handleLikeClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
         event.stopPropagation();
         // logic
      },
      []
   );

   const handleImageClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
      if (!(event.target instanceof HTMLAnchorElement)) {
         dispatch(openModal(modalContent));
      }
   }, []);

   return (
      <div
         className={styles.content}
         onClick={hasModal ? handleImageClick : undefined}
      >
         <div className={styles.topPanel}>
            {login && (
               <Link to={`/${User}/${userId}`} className={styles.user}>
                  @{login}
               </Link>
            )}
            <Button
               variant="none"
               className={styles.likeBtn}
               onClick={handleLikeClick}
            >
               <HeartIcon />
            </Button>
            <ImageInfo {...props} />
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
