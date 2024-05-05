import styles from "./Shop.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import ShopFilters from "./components/ShopFilters/ShopFilters";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import { useFetchAllProductsQuery } from './../../services/ProductService';
import { IProduct } from './../../types/API/IProduct';

const Shop = () => {

   const {data, error, isLoading} = useFetchAllProductsQuery()

   if (data) {
      data.forEach((data: IProduct) => console.log(data))
   }

   return (
      <div className="shop">
         <ShopHeader />

          <Wrapper>
            <div className={styles.content}>
              <ShopFilters />
              <section className={styles.products}>
               
              </section>
            </div>
          </Wrapper>

      </div>
   );
};

export default Shop;
