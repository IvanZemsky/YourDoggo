import Input from "@/components/UI/Input/Input";
import { FieldValues, useForm } from "react-hook-form";
import styles from "./CreateQuestion.module.scss";
import Wrapper from "@/components/UI/Wrapper/Wrapper";
import Button from "@/components/UI/Button/Button";
import { useCreateForumMessageMutation } from "@/services/forum";
import { useNavigate } from "react-router";
import { useAppSelector } from "@/hooks/redux";
import { RoutesEnum } from "@/constants/routes";

const {Forum} = RoutesEnum

const CreateQuestion = () => {
   const [create] = useCreateForumMessageMutation();

   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      getValues,
   } = useForm();

      const userId = useAppSelector(state => state.auth.userId)

      const onSubmit = async (formData: FieldValues) => {
         const title = getValues("title");
         const desc = getValues("desc");
   
         const newQuestion = await create({
            userId: userId as string,
            title,
            description: desc,
         });
         if ("data" in newQuestion) {
            navigate(`/${Forum}/${newQuestion.data._id}`);
         }
      };
   

   return (
      <Wrapper additionalStyles={styles.wrapper}>
         <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
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
            <textarea
               placeholder="Описание"
               className={styles.input}
               {...register("desc", {
                  required:
                     "Описание должно быть не менее 25 не более 200 символов",
                  minLength: {
                     value: 25,
                     message:
                        "Описание должно быть не менее v не более 200 символов",
                  },
                  maxLength: {
                     value: 70,
                     message:
                        "Описание должно быть не менее 25 не более 200 символов",
                  },
               })}
            ></textarea>
            <Button className={styles.submitBtn} disabled={isSubmitting} type="submit">Отправить</Button>
         </form>
      </Wrapper>
   );
};

export default CreateQuestion;
