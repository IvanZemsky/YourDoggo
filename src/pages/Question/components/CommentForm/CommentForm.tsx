import Button from "@/components/UI/Button/Button";
import styles from './CommentForm.module.scss'
import { FieldValues, useForm } from "react-hook-form";
import { useCreateForumCommentMutation} from "@/services/forum";

interface CommentFormProps{
   userId: string | null
   forummessageId: string
}

const CommentForm = ({userId, forummessageId}: CommentFormProps) => {
   const [create, data] = useCreateForumCommentMutation()

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      getValues,
   } = useForm();

   const onSubmit = async (formData: FieldValues) => {
      const text = getValues("text");

      const newComment = await create({
         userId: userId as string,
         forummessageId,
         text,
      });
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
               minLength: 35,
            })}
            placeholder="Комментарий"
         ></textarea>
         <Button disabled={isSubmitting} type="submit">Отправить</Button>
      </form>
   );
};

export default CommentForm;
