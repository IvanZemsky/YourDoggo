import styles from "./SelectCategoryBtn.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setCategory, setTextQuery } from "@/store/slices/shop/productFilterSlice";
import { Category } from "@/types/shop";
import RadioBtn from "@/components/UI/RadioBtn/RadioBtn";

interface SelectCategoryBtnProps {
   category: Category
}

const SelectCategoryBtn = ({ category }: SelectCategoryBtnProps) => {
   const dispatch = useAppDispatch()

   const currentCategory = useAppSelector(state => state.productFilter.category)
   const defaultChecked = currentCategory === category.name || category.name === "all"

   const handleSetCategoryClick = () => {
      window.scrollTo({top: 0})
      const categoryToSet = category.name === 'all' ? '' : category.name
      dispatch(setTextQuery(""))
      dispatch(setCategory(categoryToSet))
   };

   return (
      <RadioBtn
         className={styles.btn}
         textStyle={styles.btnText}
         onClick={handleSetCategoryClick}
         text={category.value}
         value={category.name}
         id={category.name}
         name="category"
         defaultChecked={defaultChecked}
      />
   );
};

export default SelectCategoryBtn;
