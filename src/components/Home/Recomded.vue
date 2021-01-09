<template>
  <div class="recomded-outer">
    <el-divider></el-divider>
    <div class="recomded-title"><span>推荐产品</span></div>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="item in this.length"
        :key="item"
        style="padding: 20px"
      >
        <div class="card" @click="jump(item)">
          <img :src="imgurls[item - 1]" />
          <div class="card-title">
            <span>{{ product[item - 1]["product_name"] }}</span>
          </div>
          <div class="card-discribe">
            <span>
              {{ product[item - 1]["product_info"] }}
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getProducts } from "../../api/api.js";
export default {
  data() {
    return {
      length: 15,
      imgurls: [],
      product: [],
    };
  },
  methods: {
    load() {
      getProducts().then((response) => {
        this.product = response.data;
        this.length = this.product.length;
        console.log(this.product);
        console.log(this.product[1]);
        console.log(this.length);
        for (var i = 0; i < this.length; i++) {
          var url;
          url = this.product[i]["product_img_url"];
          this.imgurls.push(url);
        }
        console.log(this.imgurls);
      });
      console.log(" load finish");
    },
    jump(index) {
      console.log("jump to" + index);
      this.$router.push({
        path: "/Product",
        query: { ID: this.productID[index - index] },
      });
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style>
.recomded-title {
  font-family: "等线";
  font-size: 40px;
  width: 96%;
  margin-left: 2%;
}
.card-title > span {
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card-discribe > span {
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  margin-left: 4%;
  font-family: "等线";
  margin-top: 1rem;
  font-size: 20px;
  width: 92%;
  height: 2rem;
}
.card-discribe {
  margin-left: 10%;
  font-family: "等线";
  font-size: 12px;
  margin-top: 2rem;
  height: 3rem;
}
</style>
