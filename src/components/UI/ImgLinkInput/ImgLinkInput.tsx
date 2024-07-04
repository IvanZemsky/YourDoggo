import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import Input from "../Input/Input";
import { useImgLoad } from "@/hooks/useImgLoad";
import { useForm } from "react-hook-form";

interface ImgLinkInputProps {
   imgText: string;
}

type ImgLinkInputType = ImgLinkInputProps & InputHTMLAttributes<HTMLInputElement>;

const ImgLinkInput = forwardRef(({ imgText, ...attributes }: ImgLinkInputType, ref) => {
   const {
      imgLink,
      isError,
      handleInputChange,
      handleImageLoad,
      handleImageError,
   } = useImgLoad();

   return (
      <div>
         <Input
            type="text"
            placeholder="Вставьте ссылку на изображение"
            onChange={handleInputChange}
            value={imgLink}
            {...attributes}
         />
         {(imgLink && !isError) && (
            <img
               src={imgLink}
               alt="Иллюстрация"
               onLoad={handleImageLoad}
               onError={handleImageError}
            />
         )}
         {isError && <p>Ошибка загрузки изображения. Проверьте ссылку.</p>}
      </div>
   );
});

export default ImgLinkInput;
