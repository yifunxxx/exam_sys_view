<template>
  <div class="allcs">
    <el-form class="searchBox" ref="form" :model="form" label-width="80px">
        <el-form-item>
            <el-col :span="8">
                <el-form-item label="班级编号"><el-input v-model="form.cs_id"></el-input></el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="班级名"><el-input v-model="form.cs_name"></el-input></el-form-item>
            </el-col>
            <el-col :span="8">
                <el-button type="primary">立即查询</el-button>
                <el-button>重置</el-button>
            </el-col>
        </el-form-item>
    </el-form>
    <div class="tableBox">
        <el-button type="primary" icon="el-icon-plus">添加班级</el-button><br/><br/>
        <el-table 
        stripe :data="cs.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
        border height="328">
            <el-table-column type="index" fixed="left"></el-table-column>
            <el-table-column prop="cs_id" label="班级编号" ></el-table-column>
            <el-table-column prop="cs_name" label="班级名" ></el-table-column>
            <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">分配学科</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagesize"
        :total="cs.length"
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
          cs_id:''
          ,cs_name:''
        },
        cs:[{
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
        {
            cs_id:'1001'
            ,cs_name:'软件工程2106'
        },
       ],
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
       width: 80%;
       margin: 65px auto;
       margin-bottom: 0px;
   }
   .tableBox{
       width: 80%;
       margin: 0px auto;
   }
</style>