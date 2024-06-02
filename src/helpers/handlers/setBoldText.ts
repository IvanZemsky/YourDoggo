import { MouseEvent } from 'react';

export const setBoldText = (event: MouseEvent<HTMLButtonElement>) => {
   const selection = window.getSelection();
   if (selection && selection.rangeCount > 0) {
       const range = selection.getRangeAt(0);
       const selectedText = range.toString();
       
       const parentElement = range.commonAncestorContainer.parentElement;
       const isBold = parentElement ? parentElement.tagName === 'B' : false;

       if (isBold) {
           const boldElement = parentElement as HTMLElement;
           const textNode = document.createTextNode(boldElement.textContent || '');
           const parent = boldElement.parentNode;
           if (parent) {
               parent.replaceChild(textNode, boldElement);

               const newRange = document.createRange();
               newRange.setStart(textNode, 0);
               newRange.setEnd(textNode, textNode.length);
               selection.removeAllRanges();
               selection.addRange(newRange);
           }
       } else {
           const boldText = document.createElement('b');
           boldText.textContent = selectedText;
           range.deleteContents();
           range.insertNode(boldText);
           
           const newRange = document.createRange();
           newRange.setStart(boldText, 0);
           newRange.setEnd(boldText, boldText.childNodes.length);
           selection.removeAllRanges();
           selection.addRange(newRange);
       }
   }
};