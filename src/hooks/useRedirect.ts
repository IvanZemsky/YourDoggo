import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useRedirect = (condition: boolean, path: string, deps: any[] = []) => {
   const navigate = useNavigate();

   useEffect(() => {
      if (!condition) {
         navigate(path);
      }
   }, [condition, ...deps])
}