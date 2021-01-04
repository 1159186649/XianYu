<template>
  <div class="login-bg">
    <el-row>
      <el-col :span="6" :offset="5">
        <div class="customerEntrance" @click="goCustomer">
          <div><i class="el-icon-user-solid"></i></div>
          <div class="customer-text"><span>用户入口</span></div>
        </div>
      </el-col>
      <el-col :span="6" :offset="2">
        <div class="sellerEntrance" @click="goSeller">
          <div>
            <i class="el-icon-office-building"></i>
          </div>
          <div class="seller-text"><span>商家入口</span></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goCustomer() {
      this.$router.push({
        path: "/Login/Customer",
      });
    },
    goSeller() {
      this.$router.push({
        path: "/Login/Seller",
      });
    },
  },
};
</script>

<style>
.seller-text {
  font-size: 3rem;
  margin-top: 3rem;
}
.el-icon-user-solid {
  font-size: 8rem;
  margin-top: 8rem;
}
.customer-text {
  font-size: 3rem;
  margin-top: 2rem;
}
.el-icon-office-building {
  font-size: 8rem;
  margin-top: 8rem;
}

.login-bg {
  font-family: "等线";
  margin-top: 5rem;
}
.customerEntrance {
  width: 100%;
  color: white;
  background: #303133;
  height: 30rem;
  border-radius: 20px;
  text-align: center;
}
.customerEntrance:hover {
  box-shadow: 3px 3px 10px #909399;
  transform: translate(-3px, -3px);
  transition: all 0.2s ease-out;
  text-shadow: 2px 2px 10px;
  cursor: pointer;
}

.sellerEntrance {
  width: 100%;
  color: white;
  background: #909399;
  height: 30rem;
  border-radius: 20px;
  text-align: center;
}
.sellerEntrance:hover {
  box-shadow: 3px 3px 10px #909399;
  transform: translate(-3px, -3px);
  transition: all 0.2s ease-out;
  text-shadow: 2px 2px 10px;
  cursor: pointer;
}
</style>
