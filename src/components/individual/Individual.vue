<template>
  <div class="personal-home-bg">
    <div class="personal-home-tabs-bg">
      <el-tabs tab-position="left" :stretch="true">
        <el-tab-pane label="个人资料">
          <el-row>
            <el-col :span="10" :offset="10">
              <div class="avatar">
                <el-avatar
                  :size="120"
                  :src="circleUrl"
                  shape="square"
                ></el-avatar>
              </div>
            </el-col>
            <el-col :span="10" :offset="9">
              <div class="personal-info">
                <p>
                  <span>用户名:{{ name }}</span>
                </p>
                <p>
                  <span>生日:{{ birthday }}</span>
                </p>
                <p>
                  <span>联系电话:{{ telephont }}</span>
                </p>
                <p>
                  <span>邮箱:{{ email }}</span>
                </p>
                <p>
                  <span>住址:{{ address }}</span>
                </p>
                <p><span></span></p>
              </div>
            </el-col>
            <el-col :span="5" :offset="10">
              <div class="exit-button">
                <el-button type="danger" @click="exit">安全退出</el-button>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
// import Top from "../TopNav";
export default {
  data() {
    return {
      flag: "",
      name: "",
      birthday: "2000-4-11",
      telephont: "xxxx-xxxxxxxxxxx",
      address: "xxxxxxxx",
      email: "xxxxxxxx@qq.com",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    exit() {
      console.log(this.name);
      console.log(this.flag);
      pubsub.publishSync("LoginStatus", 0);
      pubsub.publishSync("LoginId", "");
      this.$router.push({
        path: "/",
      });
    },
  },
  mounted() {
    pubsub.subscribe("UserLogin", (mag, msg1) => {
      this.flag = msg1;
    });
    pubsub.subscribe("UserName", (msg, msg1) => {
      this.name = msg1;
    });
  },
};
</script>

<style>
.exit-button {
  margin-top: 2rem;
}
.personal-info {
  margin-top: 3rem;
  font-size: 20px;
  text-align: left;
}
.personal-home-bg {
  font-family: "等线";
  margin-top: 5rem;
}
.personal-home-tabs-bg {
  width: 90%;
  margin-left: 5%;
}
.avatar {
  width: 100%;
}
</style>
