const months = [ "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export const formatDate = (dateString: string, type: "text" | "date"): string => {
   const date = new Date(dateString);
   const day = date.getDate();
   const monthNumber = date.getMonth();
   const year = date.getFullYear();

   const realMonthNumber = monthNumber < 10 ? `0${monthNumber + 1}` : monthNumber + 1;
   const realDayNumber = day < 10 ? `0${day}` : day;

   switch (type) {
      case "text":
         return `${day} ${months[monthNumber]}, ${year}`;
      case "date":
         return `${realDayNumber}.${realMonthNumber}.${year}`;
   }
};
