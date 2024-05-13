import { ChangeEvent, PropsWithChildren, ReactNode } from 'react'
import styles from './PageHeader.module.scss'
import SearchInput from './../UI/SearchInput/SearchInput';
import Wrapper from "../UI/Wrapper/Wrapper";

interface PageHeaderProps {
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
  handleSearch?: () => void
}

const PageHeader = ({handleSearch, handleInputChange, children}: PropsWithChildren<PageHeaderProps>) => {
  return (
    <header className={styles.header}>
      <Wrapper>
         <div className={styles.content}>
            <SearchInput handleSearch={handleSearch} handleInputChange={handleInputChange}/>
            <div className={styles.controls}>
               {children}
            </div>
         </div>
      </Wrapper>
    </header>
  )
}

export default PageHeader
