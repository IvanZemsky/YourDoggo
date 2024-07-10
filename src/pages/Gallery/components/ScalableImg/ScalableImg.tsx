import { useState } from "react";
import styles from './ScalableImg.module.scss'
import { selectStyles } from "@/utils/selectStyles";

interface ScalableImgprops{
   imgLink: string
}

const ScalableImg = ({imgLink}: ScalableImgprops) => {
   const [isScaled, setIsScaled] = useState(false)

   const handleScale = () => {
      setIsScaled(!isScaled)
   }

   const imgStyles = selectStyles(isScaled, '', styles.scaled)

   return (
      <div className={styles.imgWrap}>
         <img src={imgLink} alt="Изображение" className={imgStyles} onClick={handleScale}/>
      </div>
   );
};

export default ScalableImg;
