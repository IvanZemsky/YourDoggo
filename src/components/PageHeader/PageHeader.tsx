import { PropsWithChildren, ReactNode } from 'react'
import styles from './PageHeader.module.scss'
import Wrapper from "../UI/Wrapper/Wrapper";

interface PageHeaderProps {
  input: ReactNode
}

const PageHeader = ({input, children}: PropsWithChildren<PageHeaderProps>) => {
  return (
    <header className={styles.header}>
      <Wrapper>
         <div className={styles.content}>
            {input}
            <div className={styles.controls}>
               {children}
            </div>
         </div>
      </Wrapper>
    </header>
  )
}

export default PageHeader
