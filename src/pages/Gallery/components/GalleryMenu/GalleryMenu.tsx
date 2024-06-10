import CheckBtn from "@/components/UI/CheckBtn/CheckBtn";
import Menu from "@/components/UI/Menu/Menu";
import PageLink from "@/components/UI/PageLink/PageLink";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import { RoutesEnum } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
   toggleLiked,
   toggleUserId,
} from "@/store/slices/gallery/galleryFilterSlice";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./GalleryMenu.module.scss";

const { Gallery, Create } = RoutesEnum;

const GalleryMenu = () => {
   const dispatch = useAppDispatch();
   const isBurger = useMediaQuery({ maxWidth: 950 });

   const userId = useAppSelector((state) => state.auth.userId);
   const filterUserId = useAppSelector((state) => state.galleryFilter.userId);
   const liked = useAppSelector((state) => state.galleryFilter.liked);

   const handleLikedClick = () => {
      dispatch(toggleLiked());
   };

   const handleYourGalleryClick = () => {
      dispatch(toggleUserId(userId));
   };

   const isCurrentUserFilter = filterUserId === userId
   const cond = filterUserId !== "" && !isCurrentUserFilter

   return (
      <Menu isOpen={isBurger}>
         {!!userId && (
            <Fragment>
               <CheckBtn
                  className={styles.check}
                  text="Понравишиеся"
                  handleClick={handleLikedClick}
                  name="filters"
                  id="liked"
                  checked={liked}
                  readOnly
               />
               <CheckBtn
                  className={styles.check}
                  text={cond ? "Все фото" : "Ваша галерея"}
                  handleClick={handleYourGalleryClick}
                  name="filters"
                  id="your-gallery"
                  checked={isCurrentUserFilter}
                  readOnly
               />
            </Fragment>
         )}
         <PageLink
            to={`/${Gallery}/${Create}`}
            icon={<PlusIcon />}
            className={styles.btn}
         >
            Добавить
         </PageLink>
      </Menu>
   );
};

export default GalleryMenu;
