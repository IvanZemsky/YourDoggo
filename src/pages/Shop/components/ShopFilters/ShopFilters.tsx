import styles from "./ShopFilters.module.scss";
import SelectCategoryBtn from "../SelectCategoryBtn/SelectCategoryBtn";
import { categories } from "@/data/categories";
import PriceFilter from './../PriceFilter/PriceFilter';
import { memo } from "react";
import { useAppSelector } from "@/hooks/redux";
import { selectStyles } from "@/utils/selectStyles";

const ShopFilters = memo(() => {

   const isFiltersOpened = useAppSelector(state => state.shopSlice.isFiltersOpened)
   const panelStyles = selectStyles(isFiltersOpened, styles.panelWrap, styles.opened)

   return (
      <div className={panelStyles}>
         <div className={styles.panel}>
            <div className={styles.categories}>
               {categories.map((category) => (
                  <SelectCategoryBtn key={category.name} category={category} />
               ))}
            </div>
            <PriceFilter />
         </div>
      </div>
   );
});

export default ShopFilters;
