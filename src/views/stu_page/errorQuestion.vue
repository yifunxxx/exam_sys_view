<template>
  <div class='examlist'>
      <el-form class="searchBox" ref="form" :model="form" label-width="200px" style="margin-top:20px;">
            <el-form-item>
                <el-col :span="8">
                    <el-form-item label="学科名称"><el-input v-model="form.sub_name"></el-input></el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary">立即查询</el-button>
                    <el-button>重置</el-button>
                </el-col>
               
            </el-form-item>
      </el-form>
      <div class="item" v-for="item in exams" :key="item.tp_id">
        <el-row>
            <el-col :span="6">
                <div class="item-i">
                    <span style="font-weight:bolder;">学科：</span>
                    <span style="color:red">{{item.sub_name}}</span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="item-i">
                    <span style="font-weight:bolder;">试卷名：</span>
                    <span style="color:red">{{item.tp_name}}</span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="item-i">
                    <span style="font-weight:bolder;">错题数量：</span>
                    <span style="color:red">{{item.errorquestion_sum}}</span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="item-i-two">
                    <el-button type="warning" @click="selectErrorQuestion(item.tp_id)">查看详情</el-button>
                </div>
            </el-col>
        </el-row>
      </div>

      <!-- 加载错题弹窗 -->
      <el-dialog title="查看错题"  :visible.sync="dialogVisible">
        
      </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        exams:[{
            tp_id:'1001',
            tp_name:'C语言期末考试',
            sub_name:'C语言',
            errorquestion_sum:'5',
        },{
            tp_id:'1002',
            tp_name:'思修期末考试',
            sub_name:'思修',
            errorquestion_sum:'5',
        },{
            tp_id:'1003',
            tp_name:'马原期末考试',
            sub_name:'马原',
            errorquestion_sum:'5',
        },
        {
            tp_id:'1004',
            tp_name:'毛概期中考试',
            sub_name:'毛概',
            errorquestion_sum:'5',
        },{
            tp_id:'1005',
            tp_name:'数据结构期末考试',
            sub_name:'数据结构',
            errorquestion_sum:'5',
        },{
            tp_id:'1006',
            tp_name:'CET4试卷一',
            sub_name:'CET4等级考试',
            errorquestion_sum:'5',
        }],
        form:{
            sub_name:'',
        },
        dialogVisible: false,
    };
  },
  mounted() {
  },
  methods: {
      startExam(id){
          this.dialogVisible = true;
      },
  },
};
</script>

<style lang="less" scoped>
    .item{
        font-size:14px;
        width: 900px;
        height: 75px;
        margin:10px auto;
        border:1px solid #DCDFE6;
        border-radius: 15px;
        box-shadow: 0px 0px 15px #DCDFE6;
        text-align: center;
    }
    .item-i{
        margin-top:12% ;
    }
    .item-i-two{
        margin-top:7% ;
    }
   
</style>