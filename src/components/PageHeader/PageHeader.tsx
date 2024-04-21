import { PropsWithChildren } from 'react'
import styles from './PageHeader.module.scss'
import SearchInput from './../UI/SearchInput/SearchInput';
import Wrapper from "../UI/Wrapper/Wrapper";

const PageHeader = ({children}: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <Wrapper>
         <div className={styles.content}>
            <SearchInput/>
            <div className={styles.controls}>
               {children}
            </div>
         </div>
      </Wrapper>
    </header>
  )
}

export default PageHeader
