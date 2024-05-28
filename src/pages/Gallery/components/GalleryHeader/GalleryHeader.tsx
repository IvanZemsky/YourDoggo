import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import Button from "./../../../../components/UI/Button/Button";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import { Link } from "react-router-dom";
import Menu from "@/components/UI/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import { setTextQuery } from "@/store/slices/gallery/galleryFilterSlice";

const GalleryHeader = () => {
   const isBurger = useMediaQuery({maxWidth: 950})

   return (
      <PageHeader
         input={
            <SearchInput
               dispatchFunc={setTextQuery}
            />
         }
      >
         <Menu isOpen={isBurger}>
            <Link to="">Ваша галерея</Link>
            <Button icon={<PlusIcon />} className={styles.btn}>
               Добавить
            </Button>
         </Menu>
      </PageHeader>
   );
};

export default GalleryHeader;
