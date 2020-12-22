<template>
  <el-carousel :loop = "false" :autoplay="false" arrow="always" indicator-position="outside" trigger="click">
    <el-carousel-item v-for="(item,i) in selectquestions" :key="item" style="overflow:auto;">
      <div class="content">{{i+1}}:&nbsp;{{item.sq_content}}</div>
      <div class="option">
        <el-radio v-model="item.sq_answer" label="1">A {{item.sq_Adesc}}</el-radio>
      </div>
      <div class="option">
        <el-radio v-model="item.sq_answer" label="2">B {{item.sq_Bdesc}}</el-radio>
      </div>
      <div class="option">
        <el-radio v-model="item.sq_answer" label="3">C {{item.sq_Cdesc}}</el-radio>
      </div>
      <div class="option">
        <el-radio v-model="item.sq_answer" label="4">D {{item.sq_Ddesc}}</el-radio>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        data () {
            return {
                selectquestions:[{
                  sq_id:'1',
                  sq_content:'1+1=?贷记卡设计开发珊健康和',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },
                {
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },{
                  sq_id:'1',
                  sq_content:'1+1=?',
                  sq_Adesc:'1',
                  sq_Bdesc:'2',
                  sq_Cdesc:'3',
                  sq_Ddesc:'4',
                  sq_answer:''
                },],
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
  .content{
    font-size:18px;
    /* word-wrap:break-word; */
    width: 600px;
    margin:10px auto;
  }
  .option{
    /* word-wrap:break-word; */
    font-size:14px;
    width: 600px;
    height: 50px;
    margin:10px auto;
    border:1px solid #DCDFE6;
    border-radius: 15px;
    box-shadow: 0px 0px 15px #DCDFE6;
    padding-top: 15px;
    padding-left: 12px;
  }
</style>