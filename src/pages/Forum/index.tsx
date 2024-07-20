import styles from "./Forum.module.scss";
import QuestionList from "./components/QuestionList/QuestionList";
import {Wrapper} from "@/components/UI";
import QuestionHeader from "./components/QuestionHeader/QuestionHeader";

const Forum = () => {
   return (
      <div className={styles.content}>
         <QuestionHeader />
         <Wrapper>
            <QuestionList />
         </Wrapper>
      </div>
   );
};

export default Forum;
