<template>
  <div class="bottom-outer">
    <el-row>
      <el-col :span="20" :offset="2"
        ><el-divider content-position="center" style="margin-top: 2rem"
          >Copyright©2020</el-divider
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bottom-outer {
  width: 100%;
  background-color: #242424;
  height: 4rem;
  color: white;
}
.el-divider__text {
  position: absolute;
  background-color: #242424 !important;
  padding: 0 20px;
  color: white !important;
}
</style>
