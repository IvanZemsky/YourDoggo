import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./CreateArticle.module.scss";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { setBoldText } from "@/helpers/handlers/setBoldText";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";
import { useCreateArticleMutation } from "@/services/YourDoggoService";
import { useAppSelector } from "@/hooks/redux";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@/constants/routes";
import CreatorTag from "@/components/UI/CreatorTag/CreatorTag";

const { Signin, Articles } = RoutesEnum;

const containsDisallowedTags = (input: string) => {
   const regex = /<\/?(?!b\b|img\b)[a-z][a-z0-9]*\b[^>]*>/gi;
   return !regex.test(input);
};

const validate = (values: string[]): boolean => {
   return values.reduce((result, item) => {
      return result && containsDisallowedTags(item) && !!item.trim().length;
   }, true);
};

const CreateArticle = () => {
   const navigate = useNavigate();

   const [form, setForm] = useState({
      title: "",
      imgLink: "",
   });

   const [tag, setTag] = useState("");
   const [tags, setTags] = useState<string[]>([]);
   const [isValid, setIsValid] = useState(true);

   const userId = useAppSelector((state) => state.auth.userId);
   console.log(userId)

   useEffect(() => {
      if (!userId) {
         navigate(`/${Signin}`);
      }
   }, [userId])

   const [create] = useCreateArticleMutation();

   const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, title: event.target.value });
   };

   const handleImgLink = (event: ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, imgLink: event.target.value });
   };

   const handleTag = (event: ChangeEvent<HTMLInputElement>) => {
      setTag(event.target.value);
   };

   const handleTagInputBlur = () => {
      if (!tag.trim().length) return;
      setTags([...tags, tag]);
      setTag("");
   };

   const handleTagRemove = (btnTeg: string) => {
      return () => setTags(tags.filter((tag) => tag !== btnTeg));
   };

   const textRef = useRef<HTMLDivElement>(null);

   const handleSendClick = async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const titleContent = form.title;
      const imgLinkContent = form.imgLink;
      const contentText = textRef.current!.innerText;

      let isValid = false;

      isValid = validate([titleContent, imgLinkContent, contentText]);

      if (isValid) {
         setIsValid(true);
         const newArticle = await create({
            userId: userId as string,
            ...form,
            tags,
            text: contentText,
         });
         if ('data' in newArticle) {
            navigate(`/${Articles}/${newArticle.data._id}`)
         }
      } else {
         setIsValid(false);
      }
   };

   const handleBoldClick = setBoldText;

   return (
      <Wrapper additionalStyles={styles.wrapper}>
         <section className={styles.content}>
            <h1 className={styles.title}>Создание статьи</h1>
            <form className={styles.form}>
               <Input
                  placeholder="Название статьи"
                  className={styles.input}
                  value={form.title}
                  onChange={handleTitle}
               />
               <Input
                  placeholder="Картинка превью (ссылка)"
                  className={styles.input}
                  value={form.imgLink}
                  onChange={handleImgLink}
               />

               <div className={styles.textWrap}>
                  <div className={styles.panel}>
                     <Button onClick={handleBoldClick}>B</Button>
                  </div>
                  <div
                     className={styles.text}
                     ref={textRef}
                     contentEditable
                  ></div>
               </div>

               <div className={styles.tagsWrap}>
                  {!!tags.length && (
                     <Fragment>
                        {tags.map((tag, index) => (
                           <CreatorTag
                              key={tag + index}
                              tag={tag}
                              handleRemove={handleTagRemove(tag)}
                           />
                        ))}
                     </Fragment>
                  )}
                  <input
                     type="text"
                     value={tag}
                     onChange={handleTag}
                     onBlur={handleTagInputBlur}
                     placeholder="Тег"
                  />
               </div>

               <Button
                  type="submit"
                  className={styles.publish}
                  onClick={handleSendClick}
               >
                  Опубликовать
               </Button>
               <p className={styles.error}>
                  {!isValid &&
                     "Поля не должны быть пустыми или содержать html-теги!"}
               </p>
            </form>
         </section>
      </Wrapper>
   );
};

export default CreateArticle;
