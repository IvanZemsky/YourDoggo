import {CheckBtn, Menu, PageLink }from "@/components/UI";
import {PlusIcon} from "@/components/UI/icons";
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

   const authUserId = useAppSelector((state) => state.auth.userId);
   const filterUserId = useAppSelector((state) => state.galleryFilter.userId);
   const liked = useAppSelector((state) => state.galleryFilter.liked);

   const handleLikedClick = () => {
      dispatch(toggleLiked());
   };

   const handleYourGalleryClick = () => {
      dispatch(toggleUserId(authUserId));
   };

   const isCurrentUserEqualsFilter = filterUserId === authUserId
   const isFilteredUser = filterUserId !== "" && !isCurrentUserEqualsFilter

   return (
      <Menu isOpen={isBurger}>
         {!!authUserId && (
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
                  text={isFilteredUser ? "Все фото" : "Ваша галерея"}
                  handleClick={handleYourGalleryClick}
                  name="filters"
                  id="your-gallery"
                  checked={isCurrentUserEqualsFilter}
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
