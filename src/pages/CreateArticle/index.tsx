import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./CreateArticle.module.scss";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { setBoldText } from "@/helpers/handlers/setBoldText";
import { ChangeEvent,  useEffect, } from "react";
import { useCreateArticleMutation } from "@/services/YourDoggoService";
import { useAppSelector } from "@/hooks/redux";
import { RoutesEnum } from "@/constants/routes";
import { useRedirect } from "@/hooks/useRedirect";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ItemInput from "./../../components/UI/ItemInput/ItemInput";
import { textWithoutForbiddenHTML } from "@/constants/regexp";

const { Signin, Articles } = RoutesEnum;

const handleBoldClick = setBoldText;

const CreateArticle = () => {
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },
      getValues,
   } = useForm();
   
   const [create] = useCreateArticleMutation();

   const userId = useAppSelector((state) => state.auth.userId);

   let tagList: string[] = [];

   const setTagList = (items: string[]) => {
      tagList = [...items];
   };

   useEffect(() => {
      register("text", {
         required: "Текст статьи не должен быть пустым или содержать HTML-теги!",
         minLength: {
            value: 300,
            message: "Текст статьи должен быть не менее 300 символов"
         },
         pattern: {
            value: textWithoutForbiddenHTML,
            message: "Текст статьи не должен быть пустым или содержать HTML-теги!",
         },
      });
   }, []);

   useRedirect(!!userId, `/${Signin}`);

   const handleTextChange = (event: ChangeEvent<HTMLDivElement>) => {
      setValue("text", event.target.innerHTML.trim());
   };

   const onSubmit = async (formData: FieldValues) => {
      const title = getValues("title");
      const imgLink = getValues("imgLink");
      const text = getValues("text");

      const newArticle = await create({
         userId: userId as string,
         title,
         imgLink,
         tags: tagList,
         text,
      });
      if ('data' in newArticle) {
         navigate(`/${Articles}/${newArticle.data._id}`);
     }
   };

   return (
      <Wrapper additionalStyles={styles.wrapper}>
         <section className={styles.content}>
            <h1 className={styles.title}>Создание статьи</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <Input
                  placeholder="Название статьи"
                  className={styles.input}
                  {...register("title", {
                     required:
                        "Заголовок должен быть не менее 10 не более 70 символов",
                     minLength: {
                        value: 10,
                        message:
                           "Заголовок должен быть не менее 10 не более 70 символов",
                     },
                     maxLength: {
                        value: 70,
                        message:
                           "Заголовок должен быть не менее 10 не более 70 символов",
                     },
                  })}
               />
               <p className={styles.error}>
                  {errors.title && `${errors.title.message}`}
               </p>
               <Input
                  placeholder="Картинка превью (ссылка)"
                  className={styles.input}
                  {...register("imgLink", {
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
                     onInput={handleTextChange}
                     contentEditable
                  ></div>
               </div>

               <p className={styles.error}>
                  {errors.text && `${errors.text.message}`}
               </p>

               <ItemInput setTagList={setTagList} />

               <Button
                  type="submit"
                  className={styles.publish}
                  disabled={isSubmitting}
               >
                  Опубликовать
               </Button>
            </form>
         </section>
      </Wrapper>
   );
};

export default CreateArticle;
