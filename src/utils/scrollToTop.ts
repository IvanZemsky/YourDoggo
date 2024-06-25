/**
 * Прокручивает страницу вверх
 * @param {ScrollBehavior} [behavior='instant'] - Поведение скролла - 'auto', 'smooth', или 'instant'. Изначально 'instant'.
 * @returns {void}
 */

export const scrollToTop = (behavior: ScrollBehavior = 'instant'): void => {
   window.scrollTo({
      top: 0,
      behavior: behavior
   });
}