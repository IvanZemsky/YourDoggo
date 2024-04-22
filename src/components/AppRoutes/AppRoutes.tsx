import { LazyArticles as Articles } from "@/pages/Articles/LazyArticles";
import { LazyForum as Forum } from "@/pages/Forum/LazyForum";
import { LazyShop as Shop } from "@/pages/Shop/LazyShop";
import { LazyGallery as Gallery } from "@/pages/Gallery/LazyGallery";
import { LazyLanding as Landing } from "@/pages/Landing/LazyLanding";
import { LazyCart as Cart } from "@/pages/Cart/LazyCart";
import { Routes, Route } from "react-router";
import Layout from "../Layout/Layout";
import Signin from "@/pages/Signin/Signin";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/signin" element={<Signin />}/>
            <Route index element={<Landing />} />
            <Route path="articles" element={<Articles />} />
            <Route path="shop" element={<Shop />}>
               <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="forum" element={<Forum />} />
            <Route path="gallery" element={<Gallery />} />
         </Route>
      </Routes>
   );
};

export default AppRoutes;
