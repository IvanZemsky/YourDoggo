import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loading