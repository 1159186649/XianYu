import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import axios from "axios";
import Home from "./components/Home/Home";

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

let router = new VueRouter({
  mode: "history",
  routes: [{ path: "/Home", name: "app", component: Home }],
});

new Vue({
  el: "#app",
  render: (c) => c(App),
  router: router,
});
