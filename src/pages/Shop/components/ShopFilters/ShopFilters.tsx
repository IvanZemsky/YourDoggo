import { Category } from "@/types/shop";
import styles from "./ShopFilters.module.scss";
import SelectCategoryBtn from "../SelectCategoryBtn/SelectCategoryBtn";

const categories: Category[] = [
   { name: "all", value: "Все" },
   { name: "food", value: "Корм и лакомства" },
   { name: "leashesAndCollars", value: "Поводки и ошейники" },
   { name: "toys", value: "Игрушки" },
];

const ShopFilters = () => {
   return (
      <div className={styles.panel}>
         {categories.map((category) => (
            <SelectCategoryBtn key={category.name} category={category} />
         ))}
      </div>
   );
};

export default ShopFilters;
