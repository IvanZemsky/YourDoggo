export const selectStyles = (condition: boolean, first: string, second: string): string => {
   return condition ? [first, second].join(" ") : first
}