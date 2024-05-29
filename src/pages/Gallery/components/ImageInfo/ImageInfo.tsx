import Modal from "@/components/UI/Modal/Modal";
import { useAppDispatch } from "@/hooks/redux";
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
import LikeBtn from './../LikeBtn/LikeBtn';
import { useToggleLikeMutation } from "@/services/YourDoggoService";
import { useLikeToggle } from "@/hooks/useLikeToggle";

interface ImageInfoProps {
   id: string;
   user: string;
   title: string;
   tags: string[];
   img: string;
   datetime: any;
   isLiked: boolean
   likes: number
   login: string | undefined;
}

const { User } = RoutesEnum;

const ImageInfo = ({ id, title, tags, user: userId, img, datetime, login, likes, isLiked}: ImageInfoProps) => {
   const dispatch = useAppDispatch();

   const {like} = useLikeToggle(isLiked)

   const modalContent = `imageModal${id}`;

   const date = formatDate(datetime).split(",").join("");

   const handleCloseClick = useCallback(
      (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
         event.stopPropagation();
         dispatch(closeModal());
      },
      []
   );

   const handleContentClick = (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
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
                        <p className={styles.likes}>
                           {like?.likes || likes}
                        </p>
                        <LikeBtn 
                           imgId={id} 
                           isLiked={isLiked} 
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
                     <img src={img} alt="Изображение" />
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
