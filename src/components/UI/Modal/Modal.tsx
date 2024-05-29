import styles from "./Modal.module.scss";
import { Fade } from "../Transitions/Fade/Fade";
import { createPortal } from "react-dom";
import { HTMLAttributes, PropsWithChildren } from "react";
import { useModal } from "@/hooks/useModal";

interface ModalProps {
   modalContent: string;
   className?: string;
}

type ModalType = PropsWithChildren<ModalProps> & HTMLAttributes<HTMLDivElement>;

const Modal = ({
   modalContent,
   className,
   children,
   ...attributes
}: ModalType) => {
   const isOpened = useModal(modalContent);

   if (!isOpened) return null;

   return createPortal(
      <div className={[styles.modal, className].join(" ")} {...attributes}>
         {children}
      </div>,
      document.getElementById("modal") as HTMLElement
   );
};

export default Modal;
