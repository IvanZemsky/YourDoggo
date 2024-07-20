import {Wrapper, Input, Button, ItemInput, ImgLinkInput} from "@/components/UI";
import styles from "./CreateArticle.module.scss";
import { useCreateArticleMutation } from "@/services/articles";
import { useAppSelector } from "@/hooks/redux";
import { RoutesEnum } from "@/constants/routes";
import { useRedirect } from "@/hooks/useRedirect";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Content from "./components/Content/Content";
import { useRef } from "react";
import { parseContentHTML } from "./helpers/parseContentHTML";

const { Signin, Articles } = RoutesEnum;

const CreateArticle = () => {
   const navigate = useNavigate();

   const {
      register,
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      getValues,
   } = useForm();

   const [create] = useCreateArticleMutation();
   const userId = useAppSelector((state) => state.auth.userId);

   const contentRef = useRef<HTMLDivElement>(null);

   let tagList: string[] = [];

   const setTagList = (items: string[]) => {
      tagList = [...items];
   };

   useRedirect(!!userId, `/${Signin}`);

   const onSubmit = async (formData: FieldValues) => {
      const title = getValues("title");
      const imgLink = getValues("imgLink");
      const text = parseContentHTML(contentRef);

      const newArticle = await create({
         userId: userId as string,
         title,
         imgLink,
         tags: tagList,
         text,
      });
      if ("data" in newArticle) {
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

               <Controller
                  name="imgLink"
                  control={control}
                  defaultValue=""
                  rules={{
                     required: "Это поле не должно быть пустым",
                     minLength: 1,
                  }}
                  render={({ field }) => (
                  <ImgLinkInput
                     imgText="Обложка"
                     placeholder="Картинка превью (ссылка)"
                     className={styles.input}
                     handleChange={field.onChange}
                     {...field}
                  />
                  )}
               />
               <p className={styles.error}>
                  {errors.imgLink && `${errors.imgLink.message}`}
               </p>

               <Content ref={contentRef} />
               <p className={styles.error}>
                  {errors.text && `${errors.text.message}`}
               </p>

               <ItemInput setItemList={setTagList} />

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
