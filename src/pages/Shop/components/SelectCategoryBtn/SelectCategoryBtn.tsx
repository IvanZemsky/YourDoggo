import Button from "@/components/UI/Button/Button";
import styles from "./SelectCategoryBtn.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setCategory } from "@/store/slices/shop/productFilterSlice";
import { Category } from "@/types/shop";

interface SelectCategoryBtnProps {
   category: Category
}

const SelectCategoryBtn = ({ category }: SelectCategoryBtnProps) => {
   const dispatch = useAppDispatch()
   const currentCategory = useAppSelector(state => state.productFilter.category)

   const isCurrentCategory = currentCategory == category.name
   const btnStyles = isCurrentCategory ? [styles.btn, styles.current].join(" ") : styles.btn

   const handleSetCategoryClick = () => {
      window.scrollTo({top: 0})
      dispatch(setCategory(category.name))
   };

   return (
      <Button
         variant="outlined"
         className={btnStyles}
         onClick={handleSetCategoryClick}
      >
         {category.value}
      </Button>
   );
};

export default SelectCategoryBtn;
