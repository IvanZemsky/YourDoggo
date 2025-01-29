import { useAppDispatch } from "@/hooks/redux";
import {Button} from "../Button/Button";
import {SearchIcon} from "../icons";
import styles from "./SearchInput.module.scss";
import { ChangeEvent, memo, useEffect, useState } from "react";

type Props = {
   dispatchFunc: (arg: any) => { type: string, payload: any }
   defaultValue?: string
}

export const SearchInput = memo(({dispatchFunc, defaultValue = ""}: Props) => {
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
