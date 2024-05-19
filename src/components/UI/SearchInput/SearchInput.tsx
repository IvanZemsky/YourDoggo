import Button from "../Button/Button";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchInput.module.scss";
import { categories } from "@/data/categories";
import { ChangeEvent, memo } from "react";

interface SearchInputProps {
   handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
   handleSearch?: () => void,
   value: string
}

const SearchInput = memo(({handleSearch, handleInputChange, value}: SearchInputProps) => {

   return (
      <div className={styles.searchWrap}>
         <input
            type="text"
            className={styles.searchInput}
            onChange={handleInputChange}
            value={value}
            placeholder="Поиск"
         />
         <Button
            variant="outlined"
            icon={<SearchIcon />}
            className={styles.searchBtn}
            onClick={handleSearch}
         />
      </div>
   );
});

export default SearchInput;
