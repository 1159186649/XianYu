<template>
  <div class="TopNav">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#242424"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-row :gutter="0" @click="home">
        <el-col :xs="{ span: 6, offset: 0 }" :lg="{ span: 3, offset: 1 }">
          <el-menu-item index="1">
            <div
              class="logo"
              @click="
                $router.push(
                  { path: '/' },
                  (onComplete) => {},
                  (onAbort) => {}
                )
              "
            >
              <img src="../assets/logo-black.png" />
            </div>
          </el-menu-item>
        </el-col>
        <el-col :xs="{ span: 6, offset: 0 }" :lg="{ span: 3, offset: 0 }">
          <el-submenu index="2">
            <template slot="title">产品分类</template>
            <el-menu-item
              v-for="(type, index) in hadwareType"
              :key="index"
              :index="`2-${index}`"
            >
              <div
                @click="
                  $router.push({
                    path: '/Sort',
                    query: { type: hardwareUrls[index] },
                  })
                "
              >
                <span style="margin-left: 20px">
                  {{ type }}
                </span>
              </div>
            </el-menu-item>
          </el-submenu>
        </el-col>
        <el-col :xs="{ span: 6, offset: 0 }" :lg="{ span: 3, offset: 0 }">
          <div v-if="flag === 2">
            <el-menu-item index="3" disabled>
              <div class="shopcar" @click="goshopcar">
                <div class="shopcar-icon">
                  <i class="el-icon-shopping-cart-full"></i>
                </div>
                <div class="shopcar-text">购物车</div>
              </div>
            </el-menu-item>
          </div>
          <div v-else>
            <el-menu-item index="3">
              <div class="shopcar" @click="goshopcar">
                <div class="shopcar-icon">
                  <i class="el-icon-shopping-cart-full"></i>
                </div>
                <div class="shopcar-text">购物车</div>
              </div>
            </el-menu-item>
          </div>
        </el-col>
        <el-col :xs="{ span: 6, offset: 0 }" :lg="{ span: 3, offset: 11 }">
          <div v-if="this.flag === 2" class="sellerHome">
            <el-menu-item index="4" @click="goSellerHome">
              <i class="el-icon-s-shop"></i>
              <span>{{ name }}</span>
            </el-menu-item>
          </div>
          <div v-else-if="this.flag === 1" class="userHome">
            <el-menu-item index="4" @click="goUserHome">
              <i class="el-icon-s-home"></i>
              <span>{{ name }}</span>
            </el-menu-item>
          </div>
          <div v-else>
            <el-menu-item index="4" @click="goLogin" style="text-align: center">
              登录
            </el-menu-item>
          </div>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
// import Global from "../global";
import pubsub from "pubsub-js";
export default {
  name: "TopNav",
  data() {
    return {
      flag: 0,
      name: "",
      activeIndex: "1",
      hadwareType: [
        "笔记本电脑",
        "主板",
        "CPU",
        "显卡",
        "电源",
        "机箱",
        "内存",
        "硬盘",
        "风扇",
      ],
      hardwareUrls: [
        "laptop",
        "motherBoard",
        "cpu",
        "graphicsCard",
        "powerSupply",
        "case",
        "ram",
        "hardDisk",
        "fan",
      ],
    };
  },
  mounted() {
    pubsub.subscribe("LoginStatus", (e, msg) => {
      console.log(e, msg);
      this.flag = msg;
    });
    pubsub.subscribe("LoginId", (e, msg) => {
      this.name = msg;
    });
  },
  methods: {
    home() {
      this.$router.push({
        path: "/",
      });
    },
    goshopcar() {
      if (this.flag == 1) {
        this.$router.push({
          path: "/Shopcar",
        });
      } else {
        alert("请先登录");
        console.log(this.flag);
        this.$router.push({
          path: "/Login",
        });
      }
    },
    goLogin() {
      this.$router.push({
        path: "/Login",
      });
    },
    goUserHome() {
      console.log(this.name);

      this.$router.push({
        path: "/Individual",
      });
    },
    goSellerHome() {
      console.log("seller");
      this.$router.push({
        path: "/Individual",
      });
    },
  },
  setFlag(t) {
    this.flag1 = t;
    console.log(this.data["flag1"]);
  },
  setName(t) {
    this.name = t;
  },
};
</script>

<style scoped>
.shopcar {
  text-align: center;
}
.shopcar-icon {
  display: inline;
  color: white;
  line-height: 100%;
}
.shopcar-text {
  display: inline;
}
.TopNav {
  box-shadow: 2px 2px 15px #c0c4cc;
}

.logo {
  height: 100%;
}

.logo > img {
  height: 100%;
}
.userHome {
  color: white;
  text-align: center;
}
.sellerHome {
  color: white;
  text-align: center;
}
</style>
