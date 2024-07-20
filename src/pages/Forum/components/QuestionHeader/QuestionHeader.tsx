import PageHeader from "@/components/PageHeader/PageHeader"
import {Menu, PageLink, SearchInput} from "@/components/UI";
import {PlusIcon} from "@/components/UI/icons";
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
