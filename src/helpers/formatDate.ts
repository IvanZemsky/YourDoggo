const months = [
   "января", "февраля", "марта", "апреля", "мая", "июня",
   "июля", "августа", "сентября", "октября", "ноября", "декабря"
 ];

export const formatDate = (dateString: string): string => {
   const date = new Date(dateString);
   const day = date.getDate();
   const month = months[date.getMonth()];
   const year = date.getFullYear();
 
   return `${day} ${month}, ${year}`;
 }
