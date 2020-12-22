<template>
  <div class="menuHome">
      <div class="leftSection">
        <el-tree
            :data="menus"
            node-key="id">
        </el-tree>
      </div>
      <div class="rightSection">
        <el-form class="searchBox" ref="form" :model="form" label-width="80px">
            <el-form-item>
                <el-col :span="6">
                    <el-form-item label="菜单名称"><el-input v-model="form.m_name"></el-input></el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">立即查询</el-button>
                    <el-button>重置</el-button>
                </el-col>
                <el-col :span="6"></el-col>
                <el-col :span="6"></el-col>
            </el-form-item>
        </el-form>
        <div class="tableBox">
            <el-button type="primary" icon="el-icon-plus">添加菜单</el-button><br/><br/>
            <el-table 
            stripe :data="tableMenus.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
            border height="328">
                <el-table-column type="index" fixed="left"></el-table-column>
                <el-table-column prop="m_id" label="ID" ></el-table-column>
                <el-table-column prop="m_pid" label="父ID" ></el-table-column>
                <el-table-column prop="m_name" label="菜单名称"></el-table-column>
                <el-table-column prop="m_url" label="菜单地址"></el-table-column>
                <el-table-column  prop="m_icon" label="菜单图标" ></el-table-column>
                <el-table-column  prop="m_avaliable" label="菜单状态" > </el-table-column>
                <el-table-column fixed="right" label="操作">
                <template>
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="pagesize"
            :total="tableMenus.length"
            layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
       form: {
          m_name:''
        },
        tableMenus:[{
            m_id:'1'
            ,m_pid:'0'
            ,m_name:'用户管理'
            ,m_url:'/usermanager'
            ,m_icon:''
            ,m_avaliable:'可用'
        },{
            m_id:'1'
            ,m_pid:'0'
            ,m_name:'用户管理'
            ,m_url:'/usermanager'
            ,m_icon:''
            ,m_avaliable:'可用'
        },{
            m_id:'1'
            ,m_pid:'0'
            ,m_name:'用户管理'
            ,m_url:'/usermanager'
            ,m_icon:''
            ,m_avaliable:'可用'
        },{
            m_id:'1'
            ,m_pid:'0'
            ,m_name:'用户管理'
            ,m_url:'/usermanager'
            ,m_icon:''
            ,m_avaliable:'可用'
        },{
            m_id:'1'
            ,m_pid:'0'
            ,m_name:'用户管理'
            ,m_url:'/usermanager'
            ,m_icon:''
            ,m_avaliable:'可用'
        },{
            m_id:'1'
            ,m_pid:'0'
            ,m_name:'用户管理'
            ,m_url:'/usermanager'
            ,m_icon:''
            ,m_avaliable:'可用'
        },
        ],
       currentPage:1,
       pagesize:10,
       menus: [{
          id: 1,
          label: '学生功能',
          children: [{
            id: 4,
            label: '个人中心',
          },{
            id: 5,
            label: '错题集',
          },{
            id: 6,
            label: '在线考试',
          },{
            id: 7,
            label: '考试成绩',
          }]
        }, {
          id: 2,
          label: '教师功能',
          children: [{
            id: 8,
            label: '发布试卷'
          }, {
            id: 9,
            label: '试卷管理'
          }, {
            id: 10,
            label: '成绩统计'
          }]
        }, {
          id: 3,
          label: '管理员功能',
          children: [{
            id: 11,
            label: '用户管理'
          }, {
            id: 12,
            label: '班级管理'
          }, {
            id: 13,
            label: '学科管理'
          }, {
            id: 14,
            label: '角色管理'
          }, {
            id: 15,
            label: '菜单管理'
          }]
        }],
    };
  },
  mounted() {},
  methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange: function(val) {
        this.pagesize = val;
      },
      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
      },
  },
};
</script>

<style lang="less" scoped>
   .searchBox{
       width: 90%;
       margin: 65px auto;
       margin-bottom: 0px;
   }
   .tableBox{
       width: 80%;
       margin: 0px auto;
   }
   .leftSection{
       height: 655px;
       width: 300px;
       float: left;
       margin:0;
       border-right: 5px;
   }
   .rightSection{
       height: 655px;
       width: 1019px;
       float: right;
       margin: 0;
   }
</style>