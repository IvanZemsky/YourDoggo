import {Button} from "@/shared/ui";
import styles from './CommentForm.module.scss'
import { FieldValues, useForm } from "react-hook-form";
import { useCreateForumCommentMutation} from "@/services/forum";

interface CommentFormProps{
   userId: string | null
   forummessageId: string
}

const CommentForm = ({userId, forummessageId}: CommentFormProps) => {
   const [create, data] = useCreateForumCommentMutation({
      fixedCacheKey: 'newComment'
   })

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      getValues,
      reset,
   } = useForm();

   const onSubmit = async (formData: FieldValues) => {
      const text = getValues("text");

      const newComment = await create({
         userId: userId as string,
         forummessageId,
         text,
      });

      reset()
   };

   if (!userId) {
      return (
         <div className={styles.notAuth}>
            Авторизируйтесь, чтобы ответить на сообщение!
         </div>
      )
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <textarea
            className={styles.comment}
            {...register("text", {
               required:
                  "Описание должно быть не менее 35 символов",
               minLength: {
                  value: 25,
                  message:
                     "Описание должно быть не менее 35 символов",
               }})}
            placeholder="Комментарий"
         ></textarea>
         <Button disabled={isSubmitting} type="submit">Отправить</Button>
      </form>
   );
};

export default CommentForm;
