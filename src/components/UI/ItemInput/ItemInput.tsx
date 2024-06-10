import { Fragment } from "react/jsx-runtime";
import CreatorTag from "../CreatorTag/CreatorTag";
import styles from "./ItemInput.module.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface ItemInputProps {
   itemList?: string[]
   setItemList: (items: string[]) => void
}

const ItemInput = ({setItemList}: ItemInputProps) => {
   const { register, getValues, resetField } = useForm();
   const [tags, setTags] = useState<string[]>([]); // ПРОСТО ОБЪЕКТ

   const handleTagInputBlur = () => {
      const tag = getValues("tag");
      if (!tag.trim().length) return;
      setTags([...tags, tag]);
      resetField('tag')
   };

   const handleTagRemove = (btnTag: string) => {
      return () => {
         setTags(tags.filter((tag) => tag !== btnTag))
      };
   };

   useEffect(() => {
      setItemList(tags)
   }, [tags])

   return (
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
            {...register("tag", {
               required: false,
               minLength: 3,
               maxLength: 25,
            })}
            onBlur={handleTagInputBlur}
            placeholder="Тег"
         />
      </div>
   );
};

export default ItemInput;
