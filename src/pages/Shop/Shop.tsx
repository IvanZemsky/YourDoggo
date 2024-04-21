import styles from "./Shop.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import ShopFilters from "./components/ShopFilters/ShopFilters";
import ShopHeader from "./components/ShopHeader/Shopheader";

const Shop = () => {
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
