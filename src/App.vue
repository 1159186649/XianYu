<template>
    <div id="app">
        <TopNav></TopNav>
      <router-view></router-view>
        <carousel></carousel>
    </div>

</template>

<script>

    import TopNav from "./components/TopNav";
import Carousel from "./components/Home/Carousel";
    export default {
        name: 'App',
        components: {
            TopNav,
            Carousel,
        }
    }
</script>

<style>
    html, body {
        padding: 0;
        margin: 0;
    }
    #app {

        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
