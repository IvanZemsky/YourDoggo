import { escapeHTML } from "@/helpers/escapeHTML";
import { RefObject } from "react";

export const parseContentHTML = (contentRef: RefObject<HTMLElement>): string => {
   let textContent = "";
   if (contentRef.current) {
      const children = contentRef.current.children;
      for (let i = 0; i < children.length; i++) {
         const child = children[i] as HTMLElement;

         if (child.tagName === "TEXTAREA") {
            const textarea = child as HTMLTextAreaElement;
            textContent += `<p>${escapeHTML(textarea.value)}</p>`;
         } else if (
            child.tagName === "INPUT" &&
            (child as HTMLInputElement).type === "text"
         ) {
            const input = child as HTMLInputElement;
            textContent += `<b>${escapeHTML(input.value)}</b>`;
         } else if (child.tagName === "DIV" && child.querySelector("img")) {
            const img = child.querySelector("img") as HTMLImageElement;
            if (img) {
               textContent += `<img src="${img.src}" alt="${escapeHTML(
                  img.alt
               )}"/>`;
            }
         }
      }
   }
   console.log(textContent)
   return textContent;
};
