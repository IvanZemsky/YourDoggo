import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/UI/Button/Button";
import CartIcon from "@/components/UI/icons/CartIcon";
import styles from './ShopHeader.module.scss'
import { Link } from "react-router-dom";

const ShopHeader = () => {
   return (
      <PageHeader>
         <Link to="/shop/cart">
            <Button
               variant="outlined"
               icon={<CartIcon />}
               className={styles.cartBtn}
            />
         </Link>
      </PageHeader>
   );
};

export default ShopHeader;
