import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./GalleryHeader.module.scss";
import { useState } from "react";

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
         Ваши фото
      </PageHeader>
   );
};

export default GalleryHeader;
