/**
 * @description
 * Проверяет условие и, если оно true, возвращает селектор из first и second строк, иначе только из first строки 
 * @param condition - условие
 * @param first - первая строка
 * @param second - вторая строка
 * @returns {string} 
 */
export const selectStyles = (condition: boolean, first: string, second: string): string => {
   return condition ? [first, second].join(" ") : first
}