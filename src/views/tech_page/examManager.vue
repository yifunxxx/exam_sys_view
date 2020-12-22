<template>
  <div class="allexam">
    <el-form class="searchBox" ref="form" :model="form" label-width="80px">
        <el-form-item>
            <el-col :span="8">
                <el-form-item label="试卷名"><el-input v-model="form.tp_name"></el-input></el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="学科名"><el-input v-model="form.sub_name"></el-input></el-form-item>
            </el-col>
            <el-col :span="8">
                <el-button type="primary">立即查询</el-button>
                <el-button>重置</el-button>
            </el-col>
        </el-form-item>
    </el-form>
    <div class="tableBox">
        <el-table 
        stripe :data="tp.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
        border height="380">
            <el-table-column type="index" fixed="left"></el-table-column>
            <el-table-column prop="tp_id" label="试卷编号" ></el-table-column>
            <el-table-column prop="tp_name" label="试卷名" ></el-table-column>
            <el-table-column prop="tp_creatime" label="创建时间" ></el-table-column>
            <el-table-column prop="tp_status" label="试卷状态" ></el-table-column>
            <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">发布</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagesize"
        :total="tp.length"
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
          tp_name:''
          ,sub_name:''
        },
        tp:[{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
        },{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
        },{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
        },{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
        },{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
        },{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
        },{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            tp_creatime:'2020-12-12 15:13',
            tp_status:'未发布'
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
       width: 80%;
       margin: 65px auto;
       margin-bottom: 0px;
   }
   .tableBox{
       width: 80%;
       margin: 0px auto;
   }
</style>