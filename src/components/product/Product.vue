<template>
  <div class="product-bg">
    <div class="product-title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `Sort?type=${productType}` }">{{
          hardWareName[productType]
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ productName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container>
      <el-aside width="50%">
        <div class="product-img">
          <img :src="productUrl" />
        </div>
      </el-aside>
      <el-container>
        <el-header
          ><div class="product-name">
            {{ productName }}
          </div></el-header
        >
        <el-main>
          <el-row :gutter="30">
            <el-col :span="24">
              <div class="product-info">
                <span>
                  {{ productInfo }}
                </span>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="product-price">
                <span> ￥{{ productPrice }} </span>
              </div>
            </el-col>
            <el-col :span="24">
              <div style="font-size: 20px; margin-bottom: 1rem">
                <span>数量:</span>
              </div>
            </el-col>
            <el-col :span="24">
              <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                label="描述文字"
                style="margin-bottom: 4rem"
              ></el-input-number>
            </el-col>
            <el-col :span="10" :offset="0">
              <div class="product-buy" @click="buy">
                <span>立即购买</span>
              </div>
            </el-col>
            <el-col :span="10" :offset="0">
              <div class="product-add">
                <div class="shopcar-icon">
                  <i class="el-icon-shopping-cart-2"></i>
                </div>
                <div class="product-add-text">
                  <span>加入购物车</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      productID: this.$route.query.ID,
      productName: "TUF-RTX3070-O8G-GAMING 吃鸡电竞游戏专业独立显卡",
      productType: "cpu",
      productPrice: "4599",
      productUrl: require("../../assets/graphicCard.jpg"),
      productInfo: "8G显存 1815-1845Mhz OC超频",
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
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    buy() {
      console.log("buy" + this.num);
    },
  },
};
</script>

<style>
.product-add {
  width: 90%;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid #409eff;
  text-align: center;
  color: #409eff;
  cursor: pointer;
}
.product-add-text {
  font-size: 20px;
  display: inline;
  line-height: 3rem;
}
.shopcar-icon {
  display: inline;
  line-height: 3rem;
  font-size: 20px;
}
.product-add:hover {
  background: #409eff;
  color: white;
}
.product-buy {
  width: 90%;
  background: #409eff;
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 3rem;
  border-radius: 10px;
  cursor: pointer;
}
.product-buy:hover {
  background: rgb(102, 177, 255);
}
.product-bg {
  width: 94%;
  margin-left: 3%;
  font-family: "等线";
}
.el-breadcrumb {
  font-size: 20px;
  line-height: 1;
}
.product-title {
  margin-left: 2%;
  margin-top: 30px;
  margin-bottom: 3rem;
}
.product-info {
  font-size: 20px;
  margin-bottom: 3rem;
}
.product-price {
  font-size: 35px;
  color: red;
  margin-bottom: 3rem;
}
.product-img {
  width: 80%;
  margin-left: 10%;
}
.product-img > img {
  width: 100%;
}
.product-name {
  font-size: 30px;
}
</style>
