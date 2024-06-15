import PageHeader from "@/components/PageHeader/PageHeader"
import SearchInput from "@/components/UI/SearchInput/SearchInput"
import { setTextQuery } from "@/store/slices/forum/forumFilter"

const QuestionHeader = () => {

  return (
    <PageHeader input={<SearchInput dispatchFunc={setTextQuery}/>}>
      
    </PageHeader>
  )
}

export default QuestionHeader
