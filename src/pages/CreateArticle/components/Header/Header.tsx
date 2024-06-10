import styles from './Header.module.scss'

const Header = () => {
  return (
    <input type="text" className={styles.headerInput} placeholder="Заголовок"/>
  )
}

export default Header
