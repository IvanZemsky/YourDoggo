import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./ArticleHeader.module.scss";
import Button from "./../../../../components/UI/Button/Button";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import Menu from "@/components/UI/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import { setTextQuery } from "@/store/slices/articles/articleFilterSlice";
import { useAppDispatch } from "@/hooks/redux";

const ArticleHeader = () => {
   const dispatch = useAppDispatch();
   const isBurger = useMediaQuery({ maxWidth: 950 });

   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
         <Menu isOpen={isBurger}>
            <Button variant="none" shadow={false} className={styles.filterBtn}>
               Ваши статьи
            </Button>
            <Button icon={<PlusIcon />} className={styles.addBtn}>
               Написать статью
            </Button>
         </Menu>
      </PageHeader>
   );
};

export default ArticleHeader;
