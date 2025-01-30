import {Menu, CheckBtn} from "@/shared/ui";
import {PageLink} from "@/shared/ui";
import {PlusIcon} from "@/shared/ui/icons";
import { useMediaQuery } from "react-responsive";
import styles from "./ArticleMenu.module.scss";
import { RoutesEnum } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { toggleLiked, toggleUserId } from "@/store/slices/articles/articleFilterSlice";

import { Fragment } from "react/jsx-runtime";

const { Articles, Create } = RoutesEnum;

const ArticleMenu = () => {
   const isBurger = useMediaQuery({ maxWidth: 950 });

   const dispatch = useAppDispatch();

   const authUserId = useAppSelector((state) => state.auth.userId);
   const filterUserId = useAppSelector((state) => state.articleFilter.userId);
   const liked = useAppSelector((state) => state.articleFilter.liked);

   const handleLikedClick = () => {
      dispatch(toggleLiked());
   };

   const handleYourArticlesClick = () => {
      dispatch(toggleUserId(authUserId));
   };

   const isCurrentUserEqualsFilter = filterUserId === authUserId;
   const isFilteredUser = filterUserId !== "" && !isCurrentUserEqualsFilter;

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
                  text={isFilteredUser ? "Все фото" : "Ваши статьи"}
                  handleClick={handleYourArticlesClick}
                  name="filters"
                  id="your-gallery"
                  checked={isCurrentUserEqualsFilter}
                  readOnly
               />
            </Fragment>
         )}
         <PageLink
            to={`/${Articles}/${Create}`}
            icon={<PlusIcon />}
            className={styles.btn}
         >
            Добавить
         </PageLink>
      </Menu>
   );
};

export default ArticleMenu;
