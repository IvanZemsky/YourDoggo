import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/UI/Button/Button";
import CartIcon from "@/components/UI/icons/CartIcon";
import styles from "./ShopHeader.module.scss";
import { Link } from "react-router-dom";
import { ChangeEvent, useCallback } from "react";
import { useProductFilter } from "@/hooks/useProductFilter";
import { setTextQuery } from "@/store/slices/shop/productFilterSlice";
import { useAppDispatch } from "@/hooks/redux";

interface ShopHeaderProps {
   handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
   handleSearch?: () => void
 }

const ShopHeader = ({handleSearch, handleInputChange}: ShopHeaderProps) => {

   return (
      <PageHeader
         handleSearch={handleSearch}
         handleInputChange={handleInputChange}
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
