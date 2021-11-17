import routerLinks from "./routes.js";
import Vue from "vue";
import Router from "vue-router";

import ProductsPage from "@/pages/ProductsPage.vue";
// import Cart from "@/pages/Cart.vue";

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
];

export default new Router({
  mode: "history",
  routes: routes,
});
