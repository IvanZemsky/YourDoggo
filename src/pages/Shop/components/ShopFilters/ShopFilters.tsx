import styles from "./ShopFilters.module.scss";
import SelectCategoryBtn from "../SelectCategoryBtn/SelectCategoryBtn";
import { categories } from "@/data/categories";

const ShopFilters = () => {
   return (
      <div>
         <div className={styles.panel}>
            {categories.map((category) => (
               <SelectCategoryBtn key={category.name} category={category} />
            ))}
         </div>
      </div>
   );
};

export default ShopFilters;
