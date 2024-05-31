import Modal from "@/components/UI/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { closeModal } from "@/store/slices/modalSlice";
import styles from "./ImageInfo.module.scss";
import { MouseEvent, useCallback } from "react";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import Button from "@/components/UI/Button/Button";
import CrossIcon from "@/components/UI/icons/CrossIcon";
import { formatDate } from "@/helpers/formatDate";
import { RoutesEnum } from "@/constants/routes";
import Tags from "./components/Tags";
import LikeBtn from "../../../../components/UI/LikeBtn/LikeBtn";
import { APIEndpoints } from "@/constants/API";
import { IGalleryImg } from "@/types/API/IGalleryImg";
import LikeCounter from "../../../../components/UI/LikeCounter/LikeCounter";

const { GALLERY } = APIEndpoints;

interface ImageInfoProps extends Omit<IGalleryImg, "_id"> {
   id: string;
}

const { User } = RoutesEnum;

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

   const handleContentClick = (
      event: MouseEvent<HTMLDivElement | HTMLButtonElement>
   ) => {
      event.stopPropagation();
   };

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
                     <Link to={`/${User}/${userId}`} className={styles.user}>
                        @ {login}
                     </Link>
                     <div className={styles.headerBtns}>
                        <LikeCounter
                           className={styles.likes}
                           id={id}
                           likes={likes}
                           isLiked={isLiked}
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
                  <div className={styles.imgWrap}>
                     <img src={imgLink} alt="Изображение" />
                  </div>
                  <div className={styles.desc}>
                     <div className={styles.titleWrap}>
                        {title && <h3 className={styles.title}>{title}</h3>}
                        <p className={styles.published}>
                           Опубликовано {date} года
                        </p>
                     </div>

                     <Tags tags={tags} />
                  </div>
               </div>
            </div>
         </Wrapper>
      </Modal>
   );
};

export default ImageInfo;
