import { RoutesEnum } from "@/constants/routes";
import { useAppSelector } from "./redux";

const { User, Profile } = RoutesEnum;

/**
 * @description
 * Хук для определения, на какую страницу перенаправить пользователя - на собственный профиль или на профиль другого пользователя
 * @param {string | undefined} itemUserId - id пользователя, на который ведёт ссылка
 * @returns {string} userLink - итоговая ссылка
 */
export const useUserLink = (itemUserId: string | undefined): string => {
   const currentUserId = useAppSelector((state) => state.auth.userId);
   const userLink = currentUserId === itemUserId ? `/${Profile}` : `/${User}/${itemUserId}`;
   return userLink;
};
