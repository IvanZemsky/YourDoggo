import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import { useState } from "react";
import Button from "./../../../../components/UI/Button/Button";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import { Link } from "react-router-dom";
import PageLink from "@/components/UI/PageLink/PageLink";

const GalleryHeader = () => {
   const [searchValue, setSearchValue] = useState<string>("");

   const handleSearch = () => {};

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };

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
         <div className={styles.content}>
            <div className={styles.links}>
               <Link to="">Ваша галерея</Link>
               <PageLink to="" className={styles.link}>
                  Свежие
               </PageLink>
               <Button icon={<PlusIcon />} className={styles.link}>
                  Добавить
               </Button>
            </div>
            <Button className={styles.burger}>
               <div className={styles.burgerLine}></div>
               <div className={styles.burgerLine}></div>
               <div className={styles.burgerLine}></div>
            </Button>
         </div>
      </PageHeader>
   );
};

export default GalleryHeader;
