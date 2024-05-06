import { LazyArticles as Articles } from "@/pages/Articles/LazyArticles";
import { LazyForum as Forum } from "@/pages/Forum/LazyForum";
import { LazyShop as Shop } from "@/pages/Shop/LazyShop";
import { LazyGallery as Gallery } from "@/pages/Gallery/LazyGallery";
import { LazyLanding as Landing } from "@/pages/Landing/LazyLanding";
import { LazyCart as Cart } from "@/pages/Cart/LazyCart";
import { LazySignin as Signin } from "@/pages/Signin/LazySignin";
import { LazyProfile as Profile } from "@/pages/Profile/LazyProfile";
import { Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import Product from "@/pages/Product/Product";
import { RoutesEnum } from "@/constants/routes";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path={RoutesEnum.Signin} element={<Signin />} />
            <Route path={RoutesEnum.Profile} element={<Profile />} />
            <Route index element={<Landing />} />
            <Route path={RoutesEnum.Articles} element={<Articles />} />
            <Route path={RoutesEnum.Shop} element={<Shop />} />
            <Route path="shop/cart" element={<Cart />} />
            <Route path="shop/:id" element={<Product />} />
            <Route path={RoutesEnum.Forum} element={<Forum />} />
            <Route path={RoutesEnum.Gallery} element={<Gallery />} />
         </Route>
      </Routes>
   );
};

export default AppRoutes;
