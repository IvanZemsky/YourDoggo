import { RoutesEnum } from "@/constants/routes";
import { useAppSelector } from "./redux"

const { User, Profile } = RoutesEnum;

export const useUserLink = (itemUserId: string | undefined): string => {
   const currentUserId = useAppSelector(state => state.auth.userId)
   const userLink = currentUserId === itemUserId ? `/${Profile}` : `/${User}/${itemUserId}`
   return userLink
}