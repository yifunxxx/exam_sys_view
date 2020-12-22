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
            <el-col :span="5">
                <div class="item-i">
                    <span style="font-weight:bolder;">学科：</span>
                    <span style="color:red">{{item.sub_name}}</span>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-i">
                    <span style="font-weight:bolder;">试卷名：</span>
                    <span style="color:red">{{item.tp_name}}</span>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="item-i-4">
                    <span style="font-weight:bolder;">考试时间：</span>
                    <span style="color:red">{{item.tp_timelimit}}分钟</span>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-i-two">
                    <div>
                        <span>发布时间：</span>
                        <span style="color:red">{{item.tp_creatime}}</span>
                    </div>
                    <div>
                        <span>截止时间：</span>
                        <span style="color:red">{{item.tp_deadline}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item-i-two">
                    <el-button type="primary" @click="startExam(item.tp_id)">开始考试</el-button>
                </div>
            </el-col>
        </el-row>
      </div>

      <!-- 加载试卷弹窗 -->
      <el-dialog title="考试" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="dialogExamVisible">
          <div>
              <el-button @click="saveExam">保存</el-button>
              <el-popconfirm
                title="确认交卷吗？"
                style="float:right;"
                @confirm="subexam"
                >
                <el-button type="success" slot="reference" >交卷</el-button>
              </el-popconfirm>
          </div>
           
        <el-menu :default-active="this.$router.path" router class="el-menu-demo" mode="horizontal">
            <el-menu-item :index="item.url" v-for="(item,i) in menuList" :key="i">
                {{item.name}}
            </el-menu-item>
        </el-menu>
        <router-view/>
      </el-dialog>

      <!-- 确认考试弹窗 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>考试期间无法退出！确认考试吗？</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false;dialogExamVisible = true">确 定</el-button>
        </span>
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
            tp_timelimit:'120',
            tp_creatime:'2020-12-12 17:20',
            tp_deadline:'2020-12-20 17:20'
        },{
            tp_id:'1002',
            tp_name:'思修期末考试',
            sub_name:'思修',
            tp_timelimit:'120',
            tp_creatime:'2020-12-16 10:20',
            tp_deadline:'2020-12-20 10:20'
        },{
            tp_id:'1003',
            tp_name:'马原期末考试',
            sub_name:'马原',
            tp_timelimit:'60',
            tp_creatime:'2020-12-18 17:20',
            tp_deadline:'2020-12-25 17:20'
        },
        {
            tp_id:'1004',
            tp_name:'毛概期中考试',
            sub_name:'毛概',
            tp_timelimit:'100',
            tp_creatime:'2020-12-12 17:20',
            tp_deadline:'2020-12-20 17:20'
        },{
            tp_id:'1005',
            tp_name:'数据结构期末考试',
            sub_name:'数据结构',
            tp_timelimit:'90',
            tp_creatime:'2020-12-12 17:20',
            tp_deadline:'2020-12-20 17:20'
        },{
            tp_id:'1006',
            tp_name:'CET4试卷一',
            sub_name:'CET4等级考试',
            tp_timelimit:'150',
            tp_creatime:'2020-12-12 17:20',
            tp_deadline:'2020-12-20 17:20'
        }],
        form:{
            sub_name:'',
        },
        dialogExamVisible: false,
        dialogVisible:false,
        menuList:[{
            url:"/selectquestion",
            name:"选择题"
        },{
            url:"/judgequestion",
            name:"判断题"
        },{
            url:"/fillblankquestion",
            name:"填空题"
        },]
    };
  },
  mounted() {
  },
  methods: {
      startExam(id){
          this.dialogVisible = true;
      },
      subexam(){
          this.dialogExamVisible = false;
          this.$message({
          message: '交卷成功！',
          type: 'success'
        });
      },
      saveExam(){
          this.$message('保存成功！');
      }
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
    .item-i-4{
        margin-top:15% ;
    }
   
</style>