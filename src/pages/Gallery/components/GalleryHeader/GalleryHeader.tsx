import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import { useState } from "react";
import Button from './../../../../components/UI/Button/Button';
import PlusIcon from "@/components/UI/icons/PlusIcon";

const GalleryHeader = () => {
   const [searchValue, setSearchValue] = useState<string>("");

   const handleSearch = () => {
   };

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
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
         <Button icon={<PlusIcon/>} className={styles.addBtn}>
            Добавить
         </Button>
      </PageHeader>
   );
};

export default GalleryHeader;
