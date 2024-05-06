import Button from "@/components/UI/Button/Button";
import styles from "./SelectCategoryBtn.module.scss";

interface SelectCategoryBtnProps {
   category: string;
}

const SelectCategoryBtn = ({ category }: SelectCategoryBtnProps) => {
   const handleSetCategoryClick = () => {};

   return (
      <Button
         variant="outlined"
         className={styles.btn}
         onClick={handleSetCategoryClick}
      >
         {category}
      </Button>
   );
};

export default SelectCategoryBtn;
