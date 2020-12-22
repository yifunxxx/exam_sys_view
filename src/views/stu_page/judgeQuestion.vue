<template>
  <el-carousel :loop = "false" :autoplay="false" arrow="always" indicator-position="outside" trigger="click">
    <el-carousel-item v-for="(item,i) in judgequestions" :key="item" style="overflow:auto;">
      <div class="content">{{i+1}}:&nbsp;{{item.jd_content}}</div>
      <div class="option">
        <el-radio v-model="item.jd_answer" label="1">对</el-radio>
      </div>
      <div class="option">
        <el-radio v-model="item.jd_answer" label="2">错</el-radio>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        data () {
            return {
                judgequestions:[{
                    jd_id:'1',
                    jd_content:'张鑫很帅',
                    jd_answer:''
                },{
                    jd_id:'2',
                    jd_content:'张鑫真帅',
                    jd_answer:''
                },{
                    jd_id:'3',
                    jd_content:'张鑫最帅',
                    jd_answer:''
                },{
                    jd_id:'4',
                    jd_content:'张鑫非常帅',
                    jd_answer:''
                },{
                    jd_id:'5',
                    jd_content:'张鑫特别帅',
                    jd_answer:''
                },{
                    jd_id:'6',
                    jd_content:'张鑫超级帅',
                    jd_answer:''
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