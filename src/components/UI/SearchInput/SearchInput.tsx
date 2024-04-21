import Button from "../Button/Button";
import SearchIcon from "../icons/SearchIcon";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
   return (
      <div className={styles.searchWrap}>
         <input
            type="text"
            className={styles.searchInput}
            placeholder="Поиск"
         />
         <Button
            variant="outlined"
            icon={<SearchIcon />}
            className={styles.searchBtn}
         />
      </div>
   );
};

export default SearchInput;
