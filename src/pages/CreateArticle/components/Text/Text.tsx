import styles from './Text.module.scss'

const Text = () => {
  return (
    <textarea className={styles.text} placeholder="Блок текста"></textarea>
  )
}

export default Text
