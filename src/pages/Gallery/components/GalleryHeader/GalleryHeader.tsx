import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import { useState, ChangeEvent, MouseEvent } from "react";
import Button from "./../../../../components/UI/Button/Button";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import { Link } from "react-router-dom";
import PageLink from "@/components/UI/PageLink/PageLink";
import { Fade } from "@/components/UI/Transitions/Fade";
import Menu from "@/components/UI/Menu/Menu";
import { useMediaQuery } from "react-responsive";

const GalleryHeader = () => {
   const [searchValue, setSearchValue] = useState<string>("");

   const handleSearch = () => {};

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };

   const isBurger = useMediaQuery({maxWidth: 950})
   console.log(isBurger)

   return (
      <PageHeader
         input={
            <SearchInput
               handleSearch={handleSearch}
               handleInputChange={handleInputChange}
               value={searchValue}
            />
         }
      >
         <Menu isOpen={isBurger}>
            <Link to="">Ваша галерея</Link>
            <PageLink to="" className={styles.link}>
               Свежие
            </PageLink>
            <Button icon={<PlusIcon />} className={styles.link}>
               Добавить
            </Button>
         </Menu>
      </PageHeader>
   );
};

export default GalleryHeader;
