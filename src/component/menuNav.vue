<template>
  <div class="menuBox">
    <el-menu
      :default-active="$route.path"
      background-color="#304156"
      text-color="#BFCBD9"
      router
      unique-opened
      :collapse="isCollapse"
      v-for="(item, index) in menuList"
      :key="index"
    >
      <el-menu-item :index="item.path" v-if="!item.hasOwnProperty('childList')">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
      <el-submenu
        :index="index.toString()"
        v-if="item.hasOwnProperty('childList')"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <div v-for="(row, i) in item.childList" :key="i">
          <el-menu-item :index="row.path" v-if="row.path">
            {{ row.title }}
          </el-menu-item>
          <el-submenu
            :index="index + '-' + i"
            v-if="row.hasOwnProperty('sunList')"
          >
            <template slot="title">{{ row.title }}</template>
            <el-menu-item
              v-for="(col, j) in row.sunList"
              :key="j"
              :index="col.path"
            >
              {{ col.title }}
            </el-menu-item>
          </el-submenu>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "首页",
          path: "/main",
          icon: "el-icon-s-home",
        },
        {
          title: "学生功能",
          icon: "el-icon-s-data",
          childList: [
            {
              title: "个人中心",
              path: "/order",
            },
            {
              title: "错题集",
              path: "/errorquestion",
            },
            {
              title: "在线考试",
              path: "/exam",
            },
            {
              title: "考试成绩",
              path: "/score",
            },
          ],
        },
        {
          title: "教师功能",
          icon: "el-icon-s-custom",
          childList: [
            {
              title: "发布试卷",
              path: "/subExam",
            },
            {
              title: "试卷管理",
              path: "/exammanager",
            },
            {
              title: "成绩统计",
              path: "/allscore",
            },
          ],
        },
        {
          title: "管理员功能",
          icon: "el-icon-s-operation",
          childList: [
            {
              title: "用户管理",
              path: "/usermanager",
            },
            {
              title: "班级管理",
              path: "/csmanager",
            },
            {
              title: "学科管理",
              path: "/coursemanager",
            },
            {
              title: "角色管理",
              path: "/rolemanager",
            },
            {
              title: "菜单管理",
              path: "/menumanager",
            },
          ],
        },
        {
          title: "错误地址",
          path: "/error",
          icon: "el-icon-error",
        },
      ],
    };
  },
  props: {
    isCollapse: Boolean,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.menuBox .el-menu {
  border-right: unset;
}
</style>
