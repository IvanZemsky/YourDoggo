import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/UI/Button/Button";
import CartIcon from "@/components/UI/icons/CartIcon";
import styles from "./ShopHeader.module.scss";
import { Link } from "react-router-dom";
import { setTextQuery } from "@/store/slices/shop/productFilterSlice";
import SearchInput from "@/components/UI/SearchInput/SearchInput";

interface ShopHeaderProps {
}

const ShopHeader = ({}: ShopHeaderProps) => {

   return (
      <PageHeader
         input={
            <SearchInput
               dispatchFunc={setTextQuery}
            />
         }
      >
         <Link to="cart">
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
