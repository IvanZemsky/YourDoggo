import styles from "./Modal.module.scss";
import { Fade } from "./../Transitions/Fade";
import { createPortal } from "react-dom";
import { PropsWithChildren, useEffect } from "react";
import { useModal } from "@/hooks/useModal";

interface ModalProps {
   modalContent: string
   className?: string
}

const Modal = ({modalContent, className, children}: PropsWithChildren<ModalProps>) => {
   const isOpened = useModal(modalContent)

   if(!isOpened) return null;

   return createPortal(
      <Fade in={isOpened} >
         <div className={[styles.modal, className].join(" ")}>
            {children}
         </div>
      </Fade>,
      document.getElementById("modal") as HTMLElement
   );
};

export default Modal;
