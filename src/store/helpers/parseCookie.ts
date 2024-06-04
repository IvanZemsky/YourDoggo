export const parseCookie = (value: string): string | null => {
   return JSON.parse(
      document.cookie
         .split("; ")
         .find((row) => row.startsWith(`${value}=`))
         ?.split("=")[1] || 'null'
   )
};
