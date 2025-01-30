import {Button} from "@/shared/ui";
import styles from "./Tags.module.scss";
import { MouseEvent } from "react";

type Props = {
   tags: string[];
   handleTagClick?: (
      tag: string
   ) => (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tags = ({ tags, handleTagClick }: Props) => {
   return (
      <>
         {tags.map((tag, index) => (
            <Button
               variant="filled"
               className={styles.tag}
               key={index}
               onClick={handleTagClick && handleTagClick(tag)}
            >
               {tag}
            </Button>
         ))}
      </>
   );
};