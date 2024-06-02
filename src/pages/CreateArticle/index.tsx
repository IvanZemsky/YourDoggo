import Wrapper from "@/components/UI/Wrapper/Wrapper"
import styles from './CreateArticle.module.scss'
import Input from "@/components/UI/Input/Input"
import Button from "@/components/UI/Button/Button"
import { setBoldText } from "@/helpers/handlers/setBoldText"

const CreateArticle = () => {

  const handleBoldClick = setBoldText

  return (
    <Wrapper additionalStyles={styles.wrapper}>
      <section className={styles.content}>
        <h1 className={styles.title}>
          Создание статьи
        </h1>
        <form className={styles.form}>
          <Input placeholder="Название статьи" className={styles.input}/>
          <Input placeholder="Картинка превью (ссылка)" className={styles.input}/>
          <div className={styles.textWrap}>
            <div className={styles.panel}>
              <Button onClick={handleBoldClick}>B</Button>
            </div>
            <div className={styles.text} contentEditable>
              
            </div>
          </div>
          <Button type="submit" className={styles.publish}>Опубликовать</Button>
        </form>
      </section>
    </Wrapper>
  )
}

export default CreateArticle
