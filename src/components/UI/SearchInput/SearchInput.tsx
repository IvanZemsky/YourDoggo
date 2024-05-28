import { useAppDispatch } from "@/hooks/redux";
import Button from "../Button/Button";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchInput.module.scss";
import { ChangeEvent, memo, useEffect, useState } from "react";

interface SearchInputProps {
   dispatchFunc: (arg: any) => { type: string, payload: any }
   defaultValue?: string
}

const SearchInput = memo(({dispatchFunc, defaultValue = ""}: SearchInputProps) => {
   const dispatch = useAppDispatch()

   const [searchValue, setSearchValue] = useState<string>(defaultValue);

   useEffect(() => {
      setSearchValue(defaultValue)
   }, [defaultValue])

   const handleSearch = () => {
      dispatch(dispatchFunc(searchValue))
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };

   return (
      <div className={styles.searchWrap}>
         <input
            type="text"
            className={styles.searchInput}
            onChange={handleInputChange}
            value={searchValue}
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
