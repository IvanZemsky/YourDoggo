import Button from "@/components/UI/Button/Button";
import styles from "./SelectCategoryBtn.module.scss";
import { useAppDispatch } from "@/hooks/redux";
import { setCategory } from "@/store/slices/productFilterSlice";
import { categories } from "@/data/categories";
import { Category } from "@/types/shop";

interface SelectCategoryBtnProps {
   category: Category
}

const SelectCategoryBtn = ({ category }: SelectCategoryBtnProps) => {
   const dispatch = useAppDispatch()

   

   const handleSetCategoryClick = () => {
      dispatch(setCategory(category.name))
   };

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
