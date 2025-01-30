import PageHeader from "@/components/PageHeader/PageHeader";
import {Button, SearchInput, PageLink} from "@/shared/ui";
import {CartIcon} from "@/shared/ui/icons/";
import styles from "./ShopHeader.module.scss";
import { setTextQuery } from "@/store/slices/shop/productFilterSlice";

import { RoutesEnum } from "@/constants/routes";
import { useAppDispatch } from "@/hooks/redux";
import { toggleFilters } from "@/store/slices/shop/shopSlice";
import { useMediaQuery } from "react-responsive";

const { Cart } = RoutesEnum;

interface ShopHeaderProps {}

const ShopHeader = ({}: ShopHeaderProps) => {
   const dispatch = useAppDispatch();

   const handeToggleFilters = () => {
      dispatch(toggleFilters());
   };

   const isFilter = useMediaQuery({ maxWidth: 800 });

   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
         {isFilter && (
            <Button
               variant="outlined"
               className={styles.filtersBtn}
               onClick={handeToggleFilters}
            >
               Фильтры
            </Button>
         )}
         <PageLink
            to={`${Cart}`}
            variant="outlined"
            icon={<CartIcon />}
            className={styles.cartBtn}
         />
      </PageHeader>
   );
};

export default ShopHeader;
