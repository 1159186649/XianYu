<template>
  <div class="carousel-bg">
    <el-carousel :interval="5000" arrow="always" type="card">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          :src="require(`../../assets/carousel${item}.jpg`)"
          style="width: 100%"
        />
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
};
</script>

<style scoped>
.el-carousel__container {
  height: auto !important;
}
.carousel-bg {
  width: 100%;
  margin-top: 2rem;
}
</style>
