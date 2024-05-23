import Modal from "@/components/UI/Modal/Modal"
import { useAppDispatch } from "@/hooks/redux";
import { closeModal } from "@/store/slices/modalSlice";
import styles from './ImageInfo.module.scss'
import { MouseEvent, useCallback } from "react";

interface ImageInfoProps {
   id: string
   title: string
}

const ImageInfo = ({id, title}: ImageInfoProps) => {
   const dispatch = useAppDispatch();

   const modalContent = `imageModal${id}`

   const handleCloseClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      dispatch(closeModal())
   }, [])

  return (
    <Modal modalContent={modalContent} className={styles.imageModal}>
      <h2>{title}</h2>
      <button onClick={handleCloseClick}>Close</button>
    </Modal>
  )
}

export default ImageInfo
