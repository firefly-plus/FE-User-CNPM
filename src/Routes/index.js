import { HeaderOnly } from "~/components/Layout";
import Cart from "~/pages/Cart";
import Home from "~/pages/Home";
import ProductDetails from "~/pages/ProductDetails";
import Products from "~/pages/Products";
import Profile from "~/pages/Profile";

//Public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: HeaderOnly },
  { path: "/product", component: Products },
  { path: "/cart", component: Cart, layout: HeaderOnly },
  { path: "/profile", component: Profile, layout: HeaderOnly },
  { path: "/productdetail/:id", component: ProductDetails, layout: HeaderOnly },
];

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
