<template>
  <div class="shopcar-bg">
    <el-row class="shopcar-discribe">
      <el-col :span="2" :offset="1"><span>商品</span></el-col>
      <el-col :span="2" :offset="10"><span>销售单价</span></el-col>
      <el-col :span="2" :offset="1"><span>数量</span></el-col>
      <el-col :span="2" :offset="1"><span>小计</span></el-col>
    </el-row>
    <el-row class="shopcar-goods" v-for="index in length" :key="index">
      <el-col :span="2" :offset="1">
        <div class="shop-car-img">
          <img :src="productUrl[index - 1]" />
        </div>
      </el-col>
      <el-col :span="8" :offset="1">
        <div class="goods-title">
          <span>{{ productNames[index - 1] }}</span>
        </div>
        <div class="goods-info">
          <span>{{ productInfo[index - 1] }}</span>
        </div>
      </el-col>
      <el-col :span="2" :offset="1"
        ><div class="goods-price">
          <span>{{ productPrice[index - 1] }}</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="0">
        <div class="goods-num">
          <el-input-number
            v-model="productNum[index - 1]"
            @change="handleChange"
            :min="1"
            label="描述文字"
          ></el-input-number>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 3,
      productUrl: [
        require("../../assets/graphicCard.jpg"),
        require("../../assets/laptop.jpg"),
        require("../../assets/motherboard.jpg"),
        require("../../assets/laptop.jpg"),
        require("../../assets/graphicCard.jpg"),
      ],
      productIds: ["123 ", "456", "753"],
      productNames: [
        "ROG 冰锐2电竞游戏笔记本电脑",
        "TUF-RTX3070-O8G-GAMING 吃鸡电竞游戏专业独立显卡",
        "ROG STRIX Z490-A GAMING 吹雪主板",
      ],
      productInfo: [
        "锐龙R9-4900HS/RTX 2060 Max-Q/240Hz/IPS 防眩光非触摸雾面屏/100% sRGB",
        "8G显存 1815-1845Mhz OC超频",
        "智能主板—AI散热，AI超频，AI网络！12+2供电模组！双M.2接口！板载2.5G网卡！",
      ],
      productNum: [1, 1, 1, 1],
      productPrice: [2499, 9999, 4599],
      procuctTotalPrice: [],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.goods-num {
  margin-top: 2rem;
}
.goods-price {
  font-size: 25px;
  margin-top: 2rem;
}
.goods-title {
  margin-top: 1rem;
  font-size: 25px;
}
.goods-info {
  font-size: 15px;
}
.shop-car-img {
  width: 100%;
}
.shop-car-img > img {
  width: 100%;
}
.shopcar-goods {
  margin-top: 3rem;
  width: 80%;
  margin-left: 10%;
  border-width: 3px 1px 1px 1px;
  border-style: solid;
  border-color: rgb(96, 98, 102) rgb(220, 220, 220) rgb(220, 220, 220)
    rgb(220, 220, 220);

  padding: 4px;
}
.shopcar-bg {
  width: 100%;
  font-family: "等线";
}
.shopcar-discribe {
  height: 2rem;
  line-height: 2rem;
  width: 80%;
  margin-left: 10%;
  margin-top: 3rem;
  /* border: 1px solid rgb(220, 220, 220); */
  border-width: 3px 1px 1px 1px;
  border-style: solid;
  border-color: rgb(96, 98, 102) rgb(220, 220, 220) rgb(220, 220, 220)
    rgb(220, 220, 220);
}
</style>
