import Button from "@/components/UI/Button/Button";
import styles from "./SelectCategoryBtn.module.scss";
import { Category } from "@/types/shop";

interface SelectCategoryBtnProps {
   category: Category;
}

const SelectCategoryBtn = ({ category }: SelectCategoryBtnProps) => {
   const handleSetCategoryClick = () => {};

   return (
      <Button
         variant="outlined"
         className={styles.btn}
         onClick={handleSetCategoryClick}
      >
         {category.value}
      </Button>
   );
};

export default SelectCategoryBtn;
