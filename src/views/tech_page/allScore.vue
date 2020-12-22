<template>
  <div class="allscore">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects:[{
          sub_name:'C语言'
      },{    
          sub_name:'Java'
      },{
          sub_name:'Python'
      },{
          sub_name:'Web'
      },],
    };
  },
  mounted() {},
  methods: {
     
  },
};
</script>

<style lang="less" scoped>
   .item{
       width: 25%;
       height:300px;
       background-color: lightgreen;
       border: 1px solid;
       float: left;
   }
</style>