import Wrapper from "@/components/UI/Wrapper/Wrapper"
import styles from './CreateArticle.module.scss'
import Input from "@/components/UI/Input/Input"
import Button from "@/components/UI/Button/Button"
import { setBoldText } from "@/helpers/handlers/setBoldText"
import { ChangeEvent, useRef, useState } from "react"
import {MouseEvent} from "react"
import { useCreateArticleMutation } from "@/services/YourDoggoService"
import { useAppSelector } from "@/hooks/redux"

function containsDisallowedTags(input: string) {
  const regex = /<\/?(?!b\b|img\b)[a-z][a-z0-9]*\b[^>]*>/gi;
  return !regex.test(input);
}

const CreateArticle = () => {
  const [form, setForm] = useState({
    title: "",
    imgLink: "",
  })

  const userId = useAppSelector(state => state.auth.userId)

  const [create, data] = useCreateArticleMutation()

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, title: event.target.value})
 };

 const handleImgLink = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, imgLink: event.target.value})
 };

  const [isValid, setIsValid] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

 const handleSendClick = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()

  const content = textRef.current!.innerText
  let isValid = false

  isValid = containsDisallowedTags(content) && content.trim().length !== 0
  
  const tags: string[] = []

  if (isValid) {
    create({
      userId: userId as string, ...form, tags, text: content,
    })
  } else {
    setIsValid(false)
  }
 }



  const handleBoldClick = setBoldText

  return (
    <Wrapper additionalStyles={styles.wrapper}>
      <section className={styles.content}>
        <h1 className={styles.title}>
          Создание статьи
        </h1>
        <form className={styles.form}>
          <input placeholder="Название статьи" className={styles.input} onChange={handleTitle}/>
          <input placeholder="Картинка превью (ссылка)" className={styles.input} onChange={handleImgLink}/>
          <div className={styles.textWrap}>
            <div className={styles.panel}>
              <Button onClick={handleBoldClick}>B</Button>
            </div>
            <div className={styles.text} ref={textRef} contentEditable>
              
            </div>
          </div>
          <Button type="submit" className={styles.publish} onClick={handleSendClick}>Опубликовать</Button>
        </form>
      </section>
    </Wrapper>
  )
}

export default CreateArticle
