<template>
  <div class="sort-outer">
    <div class="sort-title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>分类</el-breadcrumb-item>
        <el-breadcrumb-item>{{
          hardWareName[hardWareType]
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider></el-divider>
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
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 15,
      hardWareType: this.$route.query.type,
      productID: ["123"],
      hardWareName: {
        cpu: "CPU",
        motherBoard: "主板",
        laptop: "笔记本电脑",
        graphicsCard: "显卡",
        powerSupply: "电源",
        case: "机箱",
        ram: "内存",
        hardDisk: "硬盘",
        fan: "风扇",
      },
      imgurls: [
        require("../../assets/laptop.jpg"),
        require("../../assets/graphicCard.jpg"),
      ],
      titles: ["ROG Zephyrus Duo 15"],
      discribes: ["GeForce® RTX 2080 SUPER™ GPU"],
    };
  },
  mounted() {
    console.log(this.hardWareType);
  },
  beforeUpdate() {
    this.hardWareType = this.$route.query.type;
  },
  methods: {
    jump(index) {
      console.log("jump to" + index);
      this.$router.push({
        path: "/Product",
        query: { ID: this.productID[index - index] },
      });
    },
  },
};
</script>

<style>
.sort-outer {
  width: 96%;
  margin-left: 2%;
}
.sort-title {
  font-size: 50px;
  margin-left: 2%;
  margin-top: 30px;
}
.el-breadcrumb {
  font-size: 20px;
  line-height: 1;
  font-family: "等线";
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
