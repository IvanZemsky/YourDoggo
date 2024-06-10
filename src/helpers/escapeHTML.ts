export const escapeHTML = (str: string): string => {
   return str.replace(/[&<>"']/g, (tag) => {
     const chars: { [key: string]: string } = {
       '&': '&amp;',
       '<': '&lt;',
       '>': '&gt;',
       '"': '&quot;',
       "'": '&#39;',
     };
     return chars[tag] || tag;
   });
 };