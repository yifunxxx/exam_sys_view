<template>
  <el-carousel :loop = "false" :autoplay="false" arrow="always" indicator-position="outside" trigger="click">
    <el-carousel-item v-for="(item,i) in fillblankquestions" :key="item" style="overflow:auto;">
      <div class="content">{{i+1}}:&nbsp;{{item.fb_content}}</div>
      <div class="option">
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入答案（多个答案用空格隔开）"
            v-model="item.fb_answer">
        </el-input>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        data () {
            return {
                fillblankquestions:[{
                    fb_content:'张鑫是个____',
                    fb_answer:''
                },
                {
                    fb_content:'张鑫真____',
                    fb_answer:''
                },{
                    fb_content:'张鑫中午吃____',
                    fb_answer:''
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
    margin:10px auto;
    padding-top: 15px;
    padding-left: 12px;
  }
</style>