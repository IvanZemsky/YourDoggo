import styles from "./Shop.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import ShopFilters from "./components/ShopFilters/ShopFilters";
import ShopHeader from "./components/ShopHeader/ShopHeader";
import ProductList from './components/ProductList/ProductList';

const Shop = () => {
   return (
      <div className="shop">
         <ShopHeader />
         <Wrapper>
            <div className={styles.content}>
               <ShopFilters />
               <ProductList />
            </div>
         </Wrapper>
      </div>
   );
};

export default Shop;
