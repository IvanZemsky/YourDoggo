import { lazy } from "react";

export const Articles = lazy(() => import('./Articles'))
export const Cart = lazy(() => import('./Cart'))
export const Forum = lazy(() => import('./Forum'))
export const Gallery = lazy(() => import('./Gallery'))
export const Home = lazy(() => import('./Home'))
export const Profile = lazy(() => import('./Profile'))
export const Product = lazy(() => import('./Product'))
export const Signin = lazy(() => import('./Signin'))
export const Shop = lazy(() => import('./Shop'))
export const User = lazy(() => import('./User'))