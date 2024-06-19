import Button from "@/components/UI/Button/Button";
import styles from './CommentForm.module.scss'

interface CommentFormProps{
   userId: string
   forummessageId: string
}

const CommentForm = ({userId, forummessageId}: CommentFormProps) => {
   return (
      <form>
         <textarea
            name="comment"
            className={styles.comment}
            id="comment"
            placeholder="Комментарий"
         ></textarea>
         <Button>Отправить</Button>
      </form>
   );
};

export default CommentForm;
