<template>
  <div class="customer-login-bg">
    <div class="login-box">
      <el-row>
        <el-col :span="24">
          <div class="login-title">
            <img src="../../assets/logo-black.png" />
          </div>
        </el-col>

        <el-col :span="15" :offset="3">
          <div class="userid">
            <el-input v-model="inputid" placeholder="请输入邮箱或用户名">
            </el-input>
          </div>
        </el-col>
        <el-col :span="15" :offset="3">
          <div class="userpassword">
            <el-input
              v-model="inputpassword"
              placeholder="请输入密码"
              show-password
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="7" :offset="3">
          <div class="loginButton">
            <el-button type="primary" @click="Login">登 录</el-button>
          </div>
        </el-col>
        <el-col :span="7" :offset="3">
          <div class="registerButton">
            <el-button type="primary" plain @click="gotoRegister"
              >注 册
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import { getUserLogin } from "../../api/api.js";
export default {
  data() {
    return {
      inputid: "",
      inputpassword: "",
      id: "123",
      password: "123",
      user: [],
      flag: 0,
      length: 0,
    };
  },
  methods: {
    getInfo() {
      getUserLogin().then((response) => {
        console.log("begain");
        this.user = response.data;
        console.log(this.user);
        this.length = this.user.length;
        console.log("len" + this.length);
        // console.log("0" + this.user[0]["user_id"]);
        // console.log("1" + this.user[0]["user_pass"]);
      });
    },
    Login() {
      if (this.inputid == "") {
        alert("用户名不能为空");
      } else if (this.inputpassword == "") {
        alert("密码不能为空");
      } else if (
        this.inputid != this.id ||
        this.inputpassword != this.password ||
        this.flag == 0
      ) {
        alert("用户名或密码不正确");
      } else {
        pubsub.publishSync("LoginStatus", 1);
        pubsub.publishSync("LoginId", this.inputid);
        pubsub.publishSync("UserLogin", this.flag);
        pubsub.publishSync("UserName", this.name);
        this.$router.push({
          path: "/",
        });
      }
    },
    gotoRegister() {
      this.$router.push({
        path: "/Register",
      });
    },
  },
  beforeUpdate() {
    for (var i = 0; i < this.length; i++) {
      if (this.user[i]["user_id"] == this.inputid) {
        this.id = this.inputid;
        this.password = this.user[i]["user_pass"];
        this.flag = 1;
        break;
      }
    }
  },
  mounted() {
    this.flag = 0;
    this.getInfo();
  },
};
</script>

<style>
.loginButton {
  margin-top: 3rem;
  width: 100%;
}
.registerButton {
  margin-top: 3rem;
  width: 100%;
}
.loginButton > .el-button {
  width: 100% !important;
}
.customer-login-bg {
  margin-top: 5rem;
  font-family: "等线";
}
.login-box {
  width: 40%;
  margin-left: 30%;
  border: 1px solid rgb(220, 220, 220);
  height: 30rem;
  border-radius: 0 0 10px 10px;
}
.login-title {
  width: 100%;
  height: 4rem;
  background: rgb(48, 49, 51);
  color: white;
  font-size: 2rem;
  line-height: 4rem;
  box-shadow: 5px 5px 1px rgb(48, 49, 51);
  transform: translate(-5px, -5px);
}
.login-title > img {
  height: 100%;
  margin-left: 2rem;
}
.userid {
  margin-top: 4rem;
  width: 100%;
}
.userpassword {
  margin-top: 3rem;
  width: 100%;
}
</style>
