<template>
  <div class="shopcar-bg">
    <el-row class="shopcar-discribe">
      <el-col :span="2" :offset="1"><span>商品</span></el-col>
      <el-col :span="2" :offset="10"><span>销售单价</span></el-col>
      <el-col :span="2" :offset="1"><span>数量</span></el-col>
      <el-col :span="2" :offset="1"><span>小计</span></el-col>
      <el-col :span="2" :offset="1"><span>操作</span></el-col>
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
      <el-col :span="2" :offset="0">
        <div class="goods-num">
          <el-input-number
            v-model="productNum[index - 1]"
            :min="1"
            size="mini"
            label="描述文字"
          ></el-input-number>
        </div>
      </el-col>
      <el-col :span="2" :offset="2">
        <div class="goods-total">
          <span>{{ productTotalPrice[index - 1] }}</span>
        </div>
      </el-col>
      <el-col :span="2" :offset="1">
        <div class="delete-goods">
          <el-popconfirm title="确定删除这件物品吗？">
            <el-button type="danger" plain size="small" slot="reference"
              >删除</el-button
            >
          </el-popconfirm>
        </div>
        <div class="buy-goods">
          <el-button type="primary" plain size="small" @click="open(index - 1)"
            >购买</el-button
          >
        </div>
      </el-col>
      <el-col :span="24">
        <el-divider></el-divider>
      </el-col>
      <!-- <el-col :span="2" :offset="1">
        <div>
          <el-avatar :size="70" :src="circleUrl" shape="circle"></el-avatar>
        </div> -->
      <!-- </el-col> -->
      <el-col> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 3,
      circleUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      productUrl: [
        require("../../assets/laptop.jpg"),
        require("../../assets/graphicCard.jpg"),
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
      productPrice: [9999, 2499, 4599],
      productTotalPrice: [0, 0, 0, 0],
      sellerName: ["xxx", "xxx", "xxx", "xxx"],
      sellerAddress: [
        "xx省xx市xx街道xx号",
        "xx省xx市xx街道xx号",
        "xx省xx市xx街道xx号",
        "xx省xx市xx街道xx号",
      ],
      sellerTele: ["10000022000", "10000022000", "10000022000", "10000022000"],
      sellerQQ: ["1122116677", "1122116677", "1122116677", "1122116677"],
      sellerEmail: [
        "1111111111@xxx.com",
        "1111111111@xxx.com",
        "1111111111@xxx.com",
        "1111111111@xxx.com",
      ],
    };
  },
  methods: {
    open(index) {
      const h = this.$createElement;
      this.$msgbox({
        title: "商家信息",
        message: h("p", null, [
          h("p", null, "姓名: " + this.sellerName[index]),
          h("p", null, "地址: " + this.sellerAddress[index]),
          h("p", null, "电话: " + this.sellerTele[index]),
          h("p", null, "QQ: " + this.sellerQQ[index]),
          h("p", null, "邮箱: " + this.sellerEmail[index]),
        ]),
        showCancelButton: true,
        confirmButtonText: "联系商家",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 300);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "action: " + action,
        });
      });
    },
  },
  mounted() {
    for (var i = 0; i < this.length; i++) {
      this.productTotalPrice[i] = this.productNum[i] * this.productPrice[i];
    }
  },
  beforeUpdate() {
    for (var i = 0; i < this.length; i++) {
      this.productTotalPrice[i] = this.productNum[i] * this.productPrice[i];
    }
    console.log(this.productTotalPrice);
  },
};
</script>

<style>
.buy-goods {
  margin-top: 1rem;
}
.delete-goods {
  margin-top: 1rem;
}
.goods-total {
  margin-top: 2rem;
  font-size: 25px;
}
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
