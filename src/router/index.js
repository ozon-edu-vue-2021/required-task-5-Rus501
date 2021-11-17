import routerLinks from "./routes.js";
import Vue from "vue";
import Router from "vue-router";

import ProductsPage from "@/pages/ProductsPage.vue";

Vue.use(Router);

const routes = [
  {
    path: routerLinks.home,
    name: "Products",
    component: ProductsPage,
  },
  {
    path: routerLinks.cart,
    name: "Cart",
    component: () => import("@/pages/Cart.vue"),
  },
  {
    path: routerLinks.favourites,
    name: "Favourites",
    component: () => import("@/pages/Favourites.vue"),
  },
];

export default new Router({
  mode: "history",
  routes: routes,
});
