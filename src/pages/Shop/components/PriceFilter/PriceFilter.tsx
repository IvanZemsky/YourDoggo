import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import styles from "./PriceFilter.module.scss";
import {
   setMaxPrice,
   setMinPrice,
} from "@/store/slices/shop/productFilterSlice";
import { ChangeEvent } from "react";

const PriceFilter = () => {
   const minPrice = useAppSelector((state) => state.productFilter.minPrice);
   const maxPrice = useAppSelector((state) => state.productFilter.maxPrice);
   
   const dispatch = useAppDispatch();

   const handleMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setMinPrice(event.target.value));
   };

   const handleMaxPrice = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setMaxPrice(event.target.value));
   };

   return (
      <div>
         <p className={styles.label}>Цена</p>
         <form className={styles.inputWrap}>
            <input
               type="number"
               value={minPrice}
               placeholder="От..."
               min={0}
               max={100000}
               onChange={handleMinPrice}
            />
            <input
               type="number"
               value={maxPrice}
               placeholder="До..."
               min={0}
               max={100000}
               onChange={handleMaxPrice}
            />
         </form>
      </div>
   );
};

export default PriceFilter;
