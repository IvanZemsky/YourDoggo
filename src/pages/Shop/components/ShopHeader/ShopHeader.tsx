import PageHeader from "@/components/PageHeader/PageHeader";
import Button from "@/components/UI/Button/Button";
import CartIcon from "@/components/UI/icons/CartIcon";
import styles from "./ShopHeader.module.scss";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import { useAppSelector } from "@/hooks/redux";

interface ShopHeaderProps {
   handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
   handleSearch?: () => void;
}

const ShopHeader = ({ handleSearch, handleInputChange }: ShopHeaderProps) => {

   const inputValue = useAppSelector(state => state.productFilter.textQuery)

   return (
      <PageHeader
         input={
            <SearchInput
               handleSearch={handleSearch}
               handleInputChange={handleInputChange}
               value={inputValue}
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
