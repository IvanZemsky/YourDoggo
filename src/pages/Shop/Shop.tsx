import styles from "./Shop.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import ShopFilters from "./components/ShopFilters/ShopFilters";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import ProductList from "./components/ProductList/ProductList";
import { useProductFilter } from "@/hooks/useProductFilter";
import { ChangeEvent, useEffect } from "react";
import { setTextQuery } from "@/store/slices/shop/productFilterSlice";
import { useAppDispatch } from "@/hooks/redux";

const Shop = () => {
   const [filter, productsData] = useProductFilter();
   const { data: products, isError, isLoading } = productsData;

   const dispatch = useAppDispatch()

   useEffect(() => {
      filter();
   }, []);

   const handleSearch = () => {
      filter();
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setTextQuery(event.target.value));
   };

   return (
      <div className="shop">
         <ShopHeader handleSearch={handleSearch} handleInputChange={handleInputChange}/>
         <Wrapper>
            <div className={styles.content}>
               <ShopFilters />
               <ProductList
                  data={products}
                  isLoading={isLoading}
                  isError={isError}
               />
            </div>
         </Wrapper>
      </div>
   );
};

export default Shop;
