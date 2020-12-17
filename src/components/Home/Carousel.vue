<template>
    <div class="carousel-bg">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <div style="width:100%">
                    <img :src="require(`../../assets/carousel${item}.jpg`)" style="width:100%"/>
                </div>

            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel.vue",
        data() {
            return {};

        },
    }
</script>

<style scoped>
    .carousel-bg {
        width: 100%
    }
</style>