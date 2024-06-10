import PageHeader from "@/components/PageHeader/PageHeader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import styles from "./ArticleHeader.module.scss";
import Button from "./../../../../components/UI/Button/Button";
import PlusIcon from "@/components/UI/icons/PlusIcon";
import Menu from "@/components/UI/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import { setTextQuery } from "@/store/slices/articles/articleFilterSlice";
import { useAppDispatch } from "@/hooks/redux";
import PageLink from "@/components/UI/PageLink/PageLink";
import { RoutesEnum } from "@/constants/routes";

const { Articles, Create } = RoutesEnum;

const ArticleHeader = () => {
   const isBurger = useMediaQuery({ maxWidth: 950 });

   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
         <Menu isOpen={isBurger}>
            <Button variant="none" shadow={false} className={styles.filterBtn}>
               Понравившиеся
            </Button>
            <Button variant="none" shadow={false} className={styles.filterBtn}>
               Ваши статьи
            </Button>
            <PageLink
               to={`/${Articles}/${Create}`}
               icon={<PlusIcon />}
               className={styles.addBtn}
            >
               Написать статью
            </PageLink>
         </Menu>
      </PageHeader>
   );
};

export default ArticleHeader;
