import { useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * @description
 * Хук для перенаправления на другую страницу при условии
 * @param {bolean} condition - условие
 * @param {string} path - путь для перенаправления
 * @param {any[]} deps - зависимости
 */

export const useRedirect = (condition: boolean, path: string, deps: any[] = []) => {
   const navigate = useNavigate();

   useEffect(() => {
      if (!condition) {
         navigate(path);
      }
   }, [condition, ...deps])
}