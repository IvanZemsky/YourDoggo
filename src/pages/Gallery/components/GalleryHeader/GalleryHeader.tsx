import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import Button from "./../../../../components/UI/Button/Button";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import Menu from "@/components/UI/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import { setTextQuery, setLiked } from "@/store/slices/gallery/galleryFilterSlice";
import { useAppDispatch } from "@/hooks/redux";

const GalleryHeader = () => {
   const dispatch = useAppDispatch();
   const isBurger = useMediaQuery({ maxWidth: 950 });

   const handleLikedClick = () => {
      dispatch(setLiked());
   };

   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
         <Menu isOpen={isBurger}>
            <Button
               variant="none"
               shadow={false}
               className={styles.filterBtn}
               onClick={handleLikedClick}
            >
               Понравившиеся
            </Button>
            <Button variant="none" shadow={false} className={styles.filterBtn}>
               Ваша галерея
            </Button>
            <Button icon={<PlusIcon />} className={styles.btn}>
               Добавить
            </Button>
         </Menu>
      </PageHeader>
   );
};

export default GalleryHeader;
