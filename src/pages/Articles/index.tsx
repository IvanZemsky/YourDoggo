import styles from './Articles.module.scss'
import {Wrapper} from "@/shared/ui"
import ArticleHeader from './components/ArticleHeader/ArticleHeader';
import ArticleList from './components/ArticleList/ArticleList';

const Articles = () => {
  return (
    <div className={styles.content}>
      <ArticleHeader />
      <Wrapper>
        <ArticleList />
      </Wrapper>
    </div>
  )
}

export default Articles
