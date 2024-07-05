import Wrapper from "@/components/UI/Wrapper/Wrapper";
import styles from "./CreateImage.module.scss";
import { useCreateGalleryImgMutation } from "@/services/gallery";
import Input from "@/components/UI/Input/Input";
import ItemInput from "./../../components/UI/ItemInput/ItemInput";
import Button from "@/components/UI/Button/Button";
import { useAppSelector } from "@/hooks/redux";
import { useRedirect } from "@/hooks/useRedirect";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Signin from "../Signin";
import { RoutesEnum } from "@/constants/routes";
import ImgLinkInput from "@/components/UI/ImgLinkInput/ImgLinkInput";

const { Gallery } = RoutesEnum;

const index = () => {
   const [create] = useCreateGalleryImgMutation();

   const navigate = useNavigate();

   const {
      register,
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      getValues,
   } = useForm();

   const userId = useAppSelector((state) => state.auth.userId);

   useRedirect(!!userId, `/${Signin}`);

   let tagList: string[] = [];

   const setTagList = (items: string[]) => {
      tagList = [...items];
   };

   const onSubmit = async (formData: FieldValues) => {
      const title = getValues("title");
      const imgLink = getValues("imgLink");

      const newGalleryImg = await create({
         userId: userId as string,
         title,
         imgLink,
         tags: tagList,
      });
      if ("data" in newGalleryImg) {
         navigate(`/${Gallery}`);
      }
   };

   return (
      <Wrapper additionalStyles={styles.wrapper}>
         <section className={styles.content}>
            <h1 className={styles.title}>Добавление изображения</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Input
                  className={styles.input}
                  placeholder="Заголовок"
                  {...register("title", {
                     maxLength: {
                        value: 45,
                        message: "Заголовок должен быть не более 45 символов",
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

               <ItemInput setItemList={setTagList} />

               <Button type="submit" disabled={isSubmitting}>
                  Опубликовать
               </Button>
            </form>
         </section>
      </Wrapper>
   );
};

export default index;
