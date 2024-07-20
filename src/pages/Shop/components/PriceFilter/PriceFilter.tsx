import { useAppDispatch } from "@/hooks/redux";
import styles from "./PriceFilter.module.scss";
import { setMinMaxPrice } from "@/store/slices/shop/productFilterSlice";
import { ChangeEvent, FormEvent, useState } from "react";
import {Button} from "@/components/UI";
import {ArrowIcon} from '@/components/UI/icons';

const PriceFilter = () => {
   const [form, setForm] = useState({
      minPrice: "",
      maxPrice: ""
   })
   
   const dispatch = useAppDispatch();

   const handleMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
      setForm({...form, minPrice: event.target.value})
   };

   const handleMaxPrice = (event: ChangeEvent<HTMLInputElement>) => {
      setForm({...form, maxPrice: event.target.value})
   };

   const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      dispatch(setMinMaxPrice(form))
   }

   return (
      <div>
         <p className={styles.label}>Цена</p>
         <form className={styles.inputWrap} onSubmit={handleSumbit}>
            <input
               type="number"
               value={form.minPrice}
               placeholder="От..."
               min={0}
               max={100000}
               onChange={handleMinPrice}
            />
            <input
               type="number"
               value={form.maxPrice}
               placeholder="До..."
               min={0}
               max={100000}
               onChange={handleMaxPrice}
            />
            <Button type="submit" shadow={false} className={styles.submitBtn}>
               <ArrowIcon />
            </Button>
         </form>
      </div>
   );
};

export default PriceFilter;
