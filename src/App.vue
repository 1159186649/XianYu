<template>
  <div id="app">
    <router-view></router-view>
    <TopNav></TopNav>
    <Home></Home>
    <Bottom></Bottom>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import Home from "./components/Home/Home";
import Bottom from "./components/Bottom";
import BackToTop from "./components/BackToTop";
export default {
  name: "App",
  components: {
    TopNav,
    Home,
    Bottom,
    BackToTop,
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
