import { useCallback, useRef } from 'react';

/**
 * Возвращает callback, который выполнится только после заданного delay
 * @param callback - функция для создания debouncedCallback
 * @param delay - задержка
 * @returns 
 */
export const useDebounce = (callback: (...args: any[]) => any, delay: number): (...args: any[]) => any => {
  const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const debouncedCallback = useCallback((...args: any[]) => {
   if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
   }
   timeoutRef.current = setTimeout(() => {
      callback(...args)
   }, delay)
  }, [callback, delay])

  return debouncedCallback
};