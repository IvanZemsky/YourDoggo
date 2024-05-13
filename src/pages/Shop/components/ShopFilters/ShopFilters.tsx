import styles from "./ShopFilters.module.scss";
import SelectCategoryBtn from "../SelectCategoryBtn/SelectCategoryBtn";
import { categories } from "@/data/categories";
import PriceFilter from './../PriceFilter/PriceFilter';
import { memo } from "react";

const ShopFilters = memo(() => {
   return (
      <div>
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
