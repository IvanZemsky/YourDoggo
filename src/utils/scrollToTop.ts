/**
 * Прокручивает страницу вверх
 * @param {ScrollBehavior} behavior - Поведение скролла - 'auto', 'smooth', или 'instant'. Изначально 'instant'.
 * @returns {void}
 */

export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
   window.scrollTo({
      top: 0,
      behavior,
   });
}