const months = [
   "января", "февраля", "марта", "апреля", "мая", "июня",
   "июля", "августа", "сентября", "октября", "ноября", "декабря"
 ];

export const formatDate = (dateString: string, type: "text" | "date"): string => {
   const date = new Date(dateString);
   const day = date.getDate();
   const monthNumber = date.getMonth();
   const year = date.getFullYear();
 
   switch (type) {
    case "text":
      return `${day} ${months[monthNumber]}, ${year}`;
    case "date":
      return `${day}.${monthNumber > 10 ? `0${monthNumber}` : monthNumber}.${year}`
   }
   
 }
