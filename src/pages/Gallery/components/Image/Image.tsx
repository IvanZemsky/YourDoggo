import styles from "./Image.module.scss";
import { formatDate } from "@/utils/formatDate";
import { useCallback, useState} from "react";
import { MouseEvent } from "react";
import { useAppDispatch} from "@/hooks/redux";
import { openModal } from "@/store/slices/modalSlice";
import ImageInfo from "../ImageInfo/ImageInfo";
import { Link } from "react-router-dom";
import LikeBtn from "../../../../components/LikeBtn/LikeBtn";
import { APIEndpoints } from "@/constants/API";
import { IGalleryImg } from "@/types/API/IGalleryImg";
import { useUserLink } from "@/hooks/useUserLink";

const {GALLERY} = APIEndpoints

interface ImageProps extends Omit<IGalleryImg, "_id"> {
   id: string;
   hasModal?: boolean;
}

const Image = (props: ImageProps) => {
   const { id, title, imgLink, datetime, userId, login, isLiked, hasModal = true } = props;
   const dispatch = useAppDispatch();

   const [style, setStyle] = useState("")

   const modalContent = `imageModal${id}`;
   const userLink = useUserLink(userId)
   const date = formatDate(datetime, "text");

   const handleImageLoad = () => {
      setStyle(styles.imageLoaded)
   }

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
               <Link to={userLink} className={styles.user}>
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

         <img src={imgLink} alt={title} className={style} onLoad={handleImageLoad}/>
         <div className={styles.info}>
            <div className={styles.date}>{date}</div>
            <p className={styles.title}>{title}</p>
         </div>
      </div>
   );
};

export default Image;
