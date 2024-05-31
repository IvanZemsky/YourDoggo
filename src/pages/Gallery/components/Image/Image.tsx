import styles from "./Image.module.scss";
import { formatDate } from "@/helpers/formatDate";
import { useCallback} from "react";
import { MouseEvent } from "react";
import { useAppDispatch} from "@/hooks/redux";
import { openModal } from "@/store/slices/modalSlice";
import ImageInfo from "../ImageInfo/ImageInfo";
import { RoutesEnum } from "@/constants/routes";
import { Link } from "react-router-dom";
import LikeBtn from "../../../../components/UI/LikeBtn/LikeBtn";
import { APIEndpoints } from "@/constants/API";
import { IGalleryImg } from "@/types/API/IGalleryImg";

const {GALLERY} = APIEndpoints

interface ImageProps extends Omit<IGalleryImg, "_id"> {
   id: string;
   hasModal?: boolean;
}

const { User } = RoutesEnum;

const Image = (props: ImageProps) => {
   const { id, title, imgLink, datetime, userId, login, isLiked, hasModal = true } = props;
   const dispatch = useAppDispatch();

   const modalContent = `imageModal${id}`;

   const date = formatDate(datetime, "text");

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
            <LikeBtn
               likedItemId={id}
               endpoint={GALLERY}
               isLiked={isLiked}
               likedStyles={styles.liked}
               unlikedStyles={styles.likeBtn}
            />

            <ImageInfo {...props} />
         </div>

         <img src={imgLink} alt={title} />
         <div className={styles.info}>
            <div className={styles.date}>{date}</div>
            <p className={styles.title}>{title}</p>
         </div>
      </div>
   );
};

export default Image;
