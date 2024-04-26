import { createRootRoute, createRoute } from "@tanstack/react-router";
import Applayout from "./components/Applayout";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Cart from "./components/Cart";

const rootRoute = createRootRoute({
  component: Applayout,
});
const logInRoute = createRoute({
  path: "/",
  component: Login,
  getParentRoute: () => rootRoute,
});

const menuRoute = createRoute({
  path: "/menu",
  component: Menu,
  getParentRoute: () => rootRoute,
});

const cartRoute = createRoute({
  path: "/cart",
  component: Cart,
  getParentRoute: () => rootRoute,
});
export const routeTree = rootRoute.addChildren([
  logInRoute,
  cartRoute,
  menuRoute,
]);
