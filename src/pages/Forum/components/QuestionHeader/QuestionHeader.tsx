import PageHeader from "@/components/PageHeader/PageHeader"
import Menu from "@/components/UI/Menu/Menu";
import PageLink from "@/components/UI/PageLink/PageLink";
import SearchInput from "@/components/UI/SearchInput/SearchInput"
import PlusIcon from "@/components/UI/icons/PlusIcon";
import { RoutesEnum } from "@/constants/routes";
import { setTextQuery } from "@/store/slices/forum/forumFilter"
import { useMediaQuery } from "react-responsive";
import styles from './QuestionHeader.module.scss'

const {Forum, Create} = RoutesEnum

const QuestionHeader = () => {

  const isBurger = useMediaQuery({ maxWidth: 950 });

  return (
    <PageHeader input={<SearchInput dispatchFunc={setTextQuery}/>}>
      <Menu isOpen={isBurger}>
         <PageLink
            to={`/${Forum}/${Create}`}
            icon={<PlusIcon />}
            className={styles.btn}
         >
            Добавить
         </PageLink>
      </Menu>
    </PageHeader>
  )
}

export default QuestionHeader
