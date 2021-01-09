<template>
  <div class="register-bg">
    <div class="register-box">
      <el-row>
        <el-col :span="24">
          <div class="register-title">
            <img src="../../../assets/logo-black.png" />
          </div>
        </el-col>
        <el-col :span="22" :offset="1">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="form.userId"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.userEmail"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="form.userAddress"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.userTele"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.userPassword" type="password"></el-input>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="form.userSex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="back">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { SellerRegister } from "../../../api/api.js";
export default {
  data() {
    return {
      form: {
        userId: "",
        userEmail: "",
        userAddress: "",
        userPassword: "",
        userTele: "",
        userSex: "",
      },
    };
  },
  methods: {
    onSubmit() {
      SellerRegister(
        this.form.userId,
        this.form.userPassword,
        this.form.userAddress,
        this.form.userEmail,
        this.form.userTele,
        this.form.userSex
      ).then((Response) => {
        console.log(Response);
      });
      console.log("user submit!");
    },
    back() {
      this.$router.push({
        path: "/Login",
      });
    },
  },
  beforeUpdate() {
    // console.log(this.form.resource);
  },
};
</script>

<style>
.register-box {
  width: 40%;
  margin-left: 30%;
  border: 1px solid rgb(220, 220, 220);
  height: 35rem;
  border-radius: 0 0 10px 10px;
}
.register-bg {
  width: 100;
  font-family: "等线";
  margin-top: 5rem;
}
.register-title {
  width: 100%;
  height: 4rem;
  background: rgb(48, 49, 51);
  box-shadow: 5px 5px 1px rgb(48, 49, 51);
  transform: translate(-5px, -5px);
  margin-bottom: 2rem;
}
.register-title > img {
  height: 100%;
  margin-left: 2rem;
}
</style>
