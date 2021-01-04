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
          <el-menu-item index="3"
            ><div class="shopcar" @click="goshopcar">
              <div class="shopcar-icon">
                <i class="el-icon-shopping-cart-full"></i>
              </div>
              <div class="shopcar-text">购物车</div>
            </div></el-menu-item
          >
        </el-col>
        <el-col :xs="{ span: 6, offset: 0 }" :lg="{ span: 3, offset: 11 }">
          <el-menu-item index="4" @click="goLogin"> 登录</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
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
  methods: {
    home() {
      this.$router.push({
        path: "/",
      });
    },
    goshopcar() {
      this.$router.push({
        path: "/Shopcar",
      });
    },
    goLogin() {
      this.$router.push({
        path: "/Login",
      });
    },
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
</style>
