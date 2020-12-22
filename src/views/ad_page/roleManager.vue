<template>
  <div class="alluser">
    <el-form class="searchBox" ref="form" :model="form" label-width="80px">
        <el-form-item>
            <el-col :span="6">
                <el-form-item label="角色名称"><el-input v-model="form.r_name"></el-input></el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="角色描述"><el-input v-model="form.r_desc"></el-input></el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="是否可用">
                    <el-radio-group v-model="form.r_avaliable">
                    <el-radio label="可用"></el-radio>
                    <el-radio label="不可用"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-button type="primary">立即查询</el-button>
            <el-button>重置</el-button>
            </el-col>
        </el-form-item>
    </el-form>
    <div class="tableBox">
        <el-button type="primary" icon="el-icon-plus">添加角色</el-button><br/><br/>
        <el-table 
        stripe :data="roles.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
        border height="328">
            <el-table-column type="index" fixed="left"></el-table-column>
            <el-table-column prop="r_name" label="角色名称" ></el-table-column>
            <el-table-column prop="r_desc" label="角色描述" ></el-table-column>
            <el-table-column  prop="r_avaliable" label="状态" > </el-table-column>
            <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">分配菜单</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagesize"
        :total="roles.length"
        layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
       form: {
          r_name:''
          ,r_id:''
          ,r_desc:''
          ,r_avaliable:''
        },
       roles:[{
           r_name:'超级管理员'
          ,r_id:'1'
          ,r_desc:'拥有全部权限'
          ,r_avaliable:'可用'
       },{
           r_name:'教师'
          ,r_id:'2'
          ,r_desc:'拥有教师全部权限'
          ,r_avaliable:'可用'
       },{
           r_name:'学生'
          ,r_id:'3'
          ,r_desc:'拥有学生全部权限'
          ,r_avaliable:'可用'
       },{
           r_name:'超级管理员'
          ,r_id:'1'
          ,r_desc:'拥有全部权限'
          ,r_avaliable:'可用'
       },{
           r_name:'超级管理员'
          ,r_id:'1'
          ,r_desc:'拥有全部权限'
          ,r_avaliable:'可用'
       },],
       currentPage:1,
       pagesize:10
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
</style>