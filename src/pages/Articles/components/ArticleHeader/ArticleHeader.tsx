import PageHeader from "@/components/PageHeader/PageHeader";
import {SearchInput} from "@/components/UI";
import { setTextQuery } from "@/store/slices/articles/articleFilterSlice";
import ArticleMenu from './../ArticleMenu/ArticleMenu';

const ArticleHeader = () => {
   return (
      <PageHeader input={<SearchInput dispatchFunc={setTextQuery} />}>
         <ArticleMenu />
      </PageHeader>
   );
};

export default ArticleHeader;
