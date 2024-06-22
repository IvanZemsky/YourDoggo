import {
   Home,
   Signin,
   Articles,
   User,
   Product,
   Profile,
   Forum,
   Gallery,
   Shop,
   Cart,
   Article,
   CreateImage,
   CreateArticle,
   Question,
} from "@/pages/LazyExports";
import { Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import { RoutesEnum } from "@/constants/routes";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path={RoutesEnum.Home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={RoutesEnum.Signin} element={<Signin />} />
            <Route path={RoutesEnum.Profile} element={<Profile />} />
            <Route path={RoutesEnum.Articles} element={<Articles />} />
            <Route
               path={RoutesEnum.Articles + "/" + RoutesEnum.Create}
               element={<CreateArticle />}
            />
            <Route path={RoutesEnum.Articles + "/:id"} element={<Article />} />
            <Route path={RoutesEnum.Shop} element={<Shop />} />
            <Route
               path={RoutesEnum.Shop + "/" + RoutesEnum.Cart}
               element={<Cart />}
            />
            <Route path={RoutesEnum.Shop + "/:id"} element={<Product />} />
            <Route path={RoutesEnum.Forum} element={<Forum />} />
            <Route path={RoutesEnum.Forum + "/:id"} element={<Question />} />
            <Route path={RoutesEnum.Gallery} element={<Gallery />} />
            <Route
               path={RoutesEnum.Gallery + "/" + RoutesEnum.Create}
               element={<CreateImage />}
            />
            <Route path={RoutesEnum.User + "/:userId"} element={<User />} />
         </Route>
      </Routes>
   );
};

export default AppRoutes;
