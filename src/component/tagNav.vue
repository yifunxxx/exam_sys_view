<template>
  <div class="tagBox">
    <el-tag
      v-for="(item, index) in tagList"
      :key="item.path"
      :closable="index > 0"
      size="medium"
      :disable-transitions="false"
      @click="clickTag(item)"
      @close="closeTag(item)"
      :effect="item.active ? 'dark' : 'plain'"
    >
      {{ item.title }}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [{ title: "首页", path: "/main", active: false }],
    };
  },
  mounted() {
    var item = {
      title: this.$route.meta.title,
      path: this.$route.path,
    };
    this.getTag(item);
  },

  watch: {
    $route(to, from) {
      var item = {
        title: to.meta.title,
        path: to.path,
      };
      this.getTag(item);
    },
  },
  methods: {
    // 路由跳转
    skipTag(item) {
      this.$router.push({
        path: "." + item.path,
      });
    },

    // 跳转页面push到面包屑
    getTag(item) {
      if(item.title != "选择题" && item.title != '判断题' && item.title != '填空题'){
        var index = this.tagList.map((item) => item.path).indexOf(item.path);
        if (index == -1) {
          this.tagList.push({
            path: item.path,
            title: item.title,
            active: false,
          });
        }
        this.activeTag(item.path);
      }
      
    },

    // 监听路由选中
    activeTag(path) {
      for (let i in this.tagList) {
        this.tagList[i].active = false;
        if (this.tagList[i].path == path) {
          this.tagList[i].active = true;
        }
      }
    },

    // 选择tag
    clickTag(item) {
      this.skipTag(item);
    },

    // 删除tag
    closeTag(item) {
      var index = this.tagList.map((item) => item.path).indexOf(item.path);
      if (item.active) {
        this.skipTag(this.tagList[index - 1]);
      }
      this.tagList.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.tagBox {
  width: 90%;
  overflow-x: auto;
  white-space: nowrap;
}

.tagBox .el-tag {
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.tagBox .el-tag:last-child {
  margin-right: unset;
}
</style>