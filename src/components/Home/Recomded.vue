<template>
  <div class="recomded-outer">
    <el-divider></el-divider>
    <div class="recomded-title"><span>推荐产品</span></div>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="item in length"
        :key="item"
        style="padding: 20px"
      >
        <div class="card" @click="jump(item)">
          <img :src="imgurls[0]" />
          <div class="card-title">
            <span>{{ titles[0] }}</span>
          </div>
          <div class="card-discribe">
            <span>
              {{ discribes[0] }}
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 15,
      imgurls: [
        require("../../assets/laptop.jpg"),
        require("../../assets/graphicCard.jpg"),
      ],
      titles: ["ROG Zephyrus Duo 15"],
      discribes: ["GeForce® RTX 2080 SUPER™ GPU"],
    };
  },
  methods: {
    jump(index) {
      console.log("jump to" + index);
    },
  },
};
</script>

<style>
.recomded-title {
  font-family: "等线";
  font-size: 30px;
  margin-left: 2%;
}
.recomded-outer {
  width: 96%;
  margin-left: 2%;
}
.card {
  background: rgb(245, 245, 245);
  cursor: pointer;
}
.card:hover {
  transform: translate(0px, -3px);
  box-shadow: 3px 3px 10px #909399;
}
.card > img {
  width: 100%;
}
.card-title {
  margin-left: 10%;
  font-family: "等线";
  margin-top: 1rem;
  font-size: 20px;
}
.card-discribe {
  margin-left: 10%;
  font-family: "等线";
  font-size: 12px;
  margin-top: 1rem;
  height: 3rem;
}
</style>
