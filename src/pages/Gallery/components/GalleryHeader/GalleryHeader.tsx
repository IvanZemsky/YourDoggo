import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import Menu from "@/components/UI/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import {
   setTextQuery,
   setLiked,
   toggleLiked,
   setUserId,
   toggleUserId,
} from "@/store/slices/gallery/galleryFilterSlice";
import { useAppDispatch } from "@/hooks/redux";
import { RoutesEnum } from "@/constants/routes";
import PageLink from "@/components/UI/PageLink/PageLink";
import CheckBtn from "@/components/UI/CheckBtn/CheckBtn";

const { Gallery, Create } = RoutesEnum;

interface GalleryHeaderProps {
   userId: string | null;
}

const GalleryHeader = ({ userId }: GalleryHeaderProps) => {
   const dispatch = useAppDispatch();
   const isBurger = useMediaQuery({ maxWidth: 950 });

   const handleLikedClick = () => {
      dispatch(toggleLiked());
   };

   const handleYourGalleryClick = () => {
      dispatch(toggleUserId(userId));
   };

   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
         <Menu isOpen={isBurger}>
            <CheckBtn
               className={styles.check}
               text="Понравишиеся"
               handleClick={handleLikedClick}
               name="filters"
               id="liked"
            />
            <CheckBtn
               className={styles.check}
               text="Ваша галерея"
               handleClick={handleYourGalleryClick}
               name="filters"
               id="your-gallery"
            />
            <PageLink
               to={`/${Gallery}/${Create}`}
               icon={<PlusIcon />}
               className={styles.btn}
            >
               Добавить
            </PageLink>
         </Menu>
      </PageHeader>
   );
};

export default GalleryHeader;
