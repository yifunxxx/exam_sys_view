<template>
  <div class="box">
    <div class="gif">
      <img src="../static/404.gif" alt="" />
    </div>
    <div class="btn">
      <el-button @click="backHome()">回到首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backHome() {
      this.$router.replace({
        path: "/main",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.gif,
img {
  width: 100%;
  height: 100%;
}
.btn {
  display: flex;
  justify-content: center;
}
</style>