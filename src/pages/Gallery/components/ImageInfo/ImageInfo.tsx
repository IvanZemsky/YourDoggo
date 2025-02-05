import {Modal, Wrapper, Button, Tags} from "@/shared/ui";
import { useAppDispatch, } from "@/hooks/redux";
import { closeModal } from "@/store/slices/modalSlice";
import styles from "./ImageInfo.module.scss";
import { MouseEvent, useCallback } from "react";
import { Link } from "react-router-dom";
import {CrossIcon} from "@/shared/ui/icons";
import { formatDate } from "@/utils/formatDate";
import { RoutesEnum } from "@/constants/routes";
import LikeBtn from "@/components/LikeBtn/LikeBtn";
import { APIEndpoints } from "@/constants/API";
import { IGalleryImg } from "@/types/API/IGalleryImg";
import LikeCounter from "@/components/LikeCounter/LikeCounter";
import { setTextQuery } from "@/store/slices/gallery/galleryFilterSlice";
import { useUserLink } from "@/hooks/useUserLink";
import ScalableImg from './../ScalableImg/ScalableImg';

const { GALLERY } = APIEndpoints;

interface ImageInfoProps extends Omit<IGalleryImg, "_id"> {
   id: string;
}

const ImageInfo = ({
   id,
   title,
   tags,
   userId,
   imgLink,
   datetime,
   login,
   likes,
   isLiked,
}: ImageInfoProps) => {
   const dispatch = useAppDispatch();

   const modalContent = `imageModal${id}`;

   const date = formatDate(datetime, "text").split(",").join("");

   const handleCloseClick = useCallback(
      (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
         event.stopPropagation();
         dispatch(closeModal());
      },
      []
   );

   const handleTagClick = (tag: string) => (event: MouseEvent<HTMLButtonElement>) => {
         dispatch(closeModal());
         dispatch(setTextQuery(tag));
      };

   const handleContentClick = (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      event.stopPropagation();
   };


   const userLink = useUserLink(userId)

   return (
      <Modal
         modalContent={modalContent}
         className={styles.imageModal}
         onClick={handleCloseClick}
      >
         <Wrapper>
            <div className={styles.content} onClick={handleContentClick}>
               <div className={styles.imageInfo}>
                  <header className={styles.header}>
                     <Link to={userLink} className={styles.user}>
                        @ {login}
                     </Link>
                     <div className={styles.headerBtns}>
                        <LikeCounter
                           className={styles.likes}
                           id={id}
                           likes={likes}
                           isLiked={isLiked}
                           endpoint={GALLERY}
                        />
                        <LikeBtn
                           likedItemId={id}
                           isLiked={isLiked}
                           endpoint={GALLERY}
                           likedStyles={styles.liked}
                           unlikedStyles={styles.likeBtn}
                        />
                        <Button
                           variant="none"
                           icon={<CrossIcon />}
                           className={styles.closeBtn}
                           onClick={handleCloseClick}
                        />
                     </div>
                  </header>
                  
                  <ScalableImg imgLink={imgLink}/>

                  <div className={styles.desc}>
                     <div className={styles.titleWrap}>
                        {title && <h3 className={styles.title}>{title}</h3>}
                        <p className={styles.published}>
                           Опубликовано {date} года
                        </p>
                     </div>

                     {!!tags.length && (
                        <div className={styles.tags}>
                           <Tags tags={tags} handleTagClick={handleTagClick} />
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </Wrapper>
      </Modal>
   );
};

export default ImageInfo;
