import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("user") || "",
  },

  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success_token(state, token) {
      state.status = "success";
      state.token = token;
      // state.user = user // 这里传递第二个参数却会是undefined，未找到原因，所以将token和user分成两个
    },
    auth_success_user(state, user) {
      state.status = "success";
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = "";
    },
  },

  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://127.0.0.1:8000/automation/api/api-token-auth/",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.username;
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            axios.defaults.headers.common["Authorization"] = "Token " + token; // 这里是在登录后将token加到默认的header中，便于后续调用需要登录权限的api
            commit("auth_success_token", token);
            commit("auth_success_user", user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
