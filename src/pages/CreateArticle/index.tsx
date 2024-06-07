import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./CreateArticle.module.scss";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { setBoldText } from "@/helpers/handlers/setBoldText";
import { ChangeEvent, Fragment, useRef, useState } from "react";
import { MouseEvent } from "react";
import { useCreateArticleMutation } from "@/services/YourDoggoService";
import { useAppSelector } from "@/hooks/redux";
import { RoutesEnum } from "@/constants/routes";
import CreatorTag from "@/components/UI/CreatorTag/CreatorTag";
import { useRedirect } from "@/hooks/useRedirect";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

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
   const [tags, setTags] = useState<string[]>([]); // ПРОСТО ОБЪЕКТ
   const [isValid, setIsValid] = useState(true);

   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      getValues
   } = useForm();

   const userId = useAppSelector((state) => state.auth.userId);

   useRedirect(!!userId, `/${Signin}`);

   const [create] = useCreateArticleMutation();

   const handleTagInputBlur = () => {
      const tag = getValues('tag')
      if (!tag.trim().length) return;
      setTags([...tags, tag]);
   };

   const handleTagRemove = (btnTeg: string) => {
      return () => setTags(tags.filter((tag) => tag !== btnTeg));
   };

   const textRef = useRef<HTMLDivElement>(null);

   // const handleSendClick = async (event: MouseEvent<HTMLButtonElement>) => {
   //    event.preventDefault();

   //    const titleContent = form.title;
   //    const imgLinkContent = form.imgLink;
   //    const contentText = textRef.current!.innerText;

   //    let isValid = false;

   //    isValid = validate([titleContent, imgLinkContent, contentText]);

   //    if (isValid) {
   //       setIsValid(true);
   //       const newArticle = await create({
   //          userId: userId as string,
   //          ...form,
   //          tags,
   //          text: contentText,
   //       });
   //       if ("data" in newArticle) {
   //          navigate(`/${Articles}/${newArticle.data._id}`);
   //       }
   //    } else {
   //       setIsValid(false);
   //    }
   // };

   const onSubmit = (data: FieldValues) => {
      console.log('отправка')
   }

   const handleBoldClick = setBoldText;

   return (
      <Wrapper additionalStyles={styles.wrapper}>
         <section className={styles.content}>
            <h1 className={styles.title}>Создание статьи</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <Input
                  placeholder="Название статьи"
                  className={styles.input}
                  {...register('title', {
                     required: "Заголовок должен быть не менее 10 не более 70 символов",
                     minLength: 10,
                     maxLength: 70,
                  })}
               />
               <p className={styles.error}>
                  {errors.title && `${errors.title.message}`}
               </p>
               <Input
                  placeholder="Картинка превью (ссылка)"
                  className={styles.input}
                  {...register('imgLink', {
                     required: "Это поле не должно быть пустым",
                     minLength: 1,
                  })}
               />
               <p className={styles.error}>
                  {errors.imgLink && `${errors.imgLink.message}`}
               </p>

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
                     {...register('tag', {
                        required: "Это поле не должно быть пустым",
                        minLength: 3,
                        maxLength: 25,
                     })}
                     onBlur={handleTagInputBlur}
                     placeholder="Тег"
                  />
               </div>

               <Button
                  type="submit"
                  className={styles.publish}
               >
                  Опубликовать
               </Button>
            </form>
         </section>
      </Wrapper>
   );
};

export default CreateArticle;
