import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import axios from "axios";
import Home from "./components/Home/Home";
import Sort from "./components/sort/Sort";
import Product from "./components/product/Product";
import Shopcar from "./components/shopcar/Shopcar";
import Login from "./components/login/Login";
import CustomerLogin from "./components/login/Customer";
import SellerLogin from "./components/login/Seller";
import Register from "./components/register/Register";
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/Home", name: "app", component: Home },
    { path: "/", name: "app", component: Home },
    { path: "/Sort", name: "app", component: Sort },
    { path: "/Product", name: "app", component: Product },
    { path: "/Shopcar", name: "app", component: Shopcar },
    { path: "/Login", name: "app", component: Login },
    {
      path: "/Login/Customer",
      name: "app",
      component: CustomerLogin,
    },
    {
      path: "/Login/Seller",
      name: "app",
      component: SellerLogin,
    },
    {
      path: "/Register",
      name: "app",
      component: Register,
    },
  ],
});

new Vue({
  el: "#app",
  render: (c) => c(App),
  router: router,
});
