import Modal from "@/components/UI/Modal/Modal";
import { useAppDispatch } from "@/hooks/redux";
import { closeModal } from "@/store/slices/modalSlice";
import styles from "./ImageInfo.module.scss";
import { MouseEvent, useCallback } from "react";
import { IGalleryImg } from "@/types/API/IGalleryImg";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import HeartIcon from "@/components/UI/icons/HeartIcon";
import Button from "@/components/UI/Button/Button";
import CrossIcon from "@/components/UI/icons/CrossIcon";
import { formatDate } from "@/helpers/formatDate";

interface ImageInfoProps {
   id: string;
   user: string;
   title: string;
   tags: string[];
   img: string;
   datetime: any;
   login: string | undefined;
}

const ImageInfo = ({ id, title, tags, img, datetime, login }: ImageInfoProps) => {
   const dispatch = useAppDispatch();

   const modalContent = `imageModal${id}`;

   const date = formatDate(datetime).split(",").join("");

   const handleCloseClick = useCallback(
      (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
         event.stopPropagation();
         dispatch(closeModal());
      },
      []
   );

   const handleContentClick = useCallback(
      (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
         event.stopPropagation();
      },
      []
   );

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
                     <Link to="" className={styles.user}>
                        @ {login}
                     </Link>
                     <div className={styles.headerBtns}>
                        <Button
                           variant="none"
                           icon={<HeartIcon />}
                           className={styles.likeBtn}
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

                     {tags.length ? (
                        <div className={styles.tags}>
                           {tags.map((tag, index) => (
                              <Button variant="filled" className={styles.tag} key={index}>
                                 {tag}
                              </Button>
                           ))}
                        </div>
                     ): null}
                  </div>
               </div>
            </div>
         </Wrapper>
      </Modal>
   );
};

export default ImageInfo;
