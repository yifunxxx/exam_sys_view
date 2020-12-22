<template>
  <div class="box">
    <el-row>
        <el-col :span="24">
            <div class="touxiang">
                <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-link type="info" style="font-size:10px;">更改头像</el-link>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">姓名：</div></el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" >
                <lable>{{userinfo.u_name}}</lable>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">学号：</div></el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" >
                <lable>{{userinfo.u_id}}</lable>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">班级：</div></el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" >
                <lable>{{userinfo.u_cs}}</lable>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">性别：</div></el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" >
                <lable>{{userinfo.u_sex}}</lable>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">手机号：</div></el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" >
                <lable>{{userinfo.u_phone}}</lable>
            </div>
        </el-col>
    </el-row>
    <el-button class="btn" type="primary" @click="dialogFormVisible = true" plain>修改资料</el-button>


    <el-dialog title="修改资料" :visible.sync="dialogFormVisible" style="padding-left:250px;padding-right:250px;">
        <el-form :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.u_name" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="form.u_id" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-input v-model="form.u_cs" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio v-model="form.u_sex" label="1">男</el-radio>
                <el-radio v-model="form.u_sex" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.u_phone" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确定修改</el-button>
        </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
        userinfo:{
            u_name:"段云锋",
            u_id:"1740501210601",
            u_cs:"软件工程2106",
            u_sex:"男",
            u_phone:"13891347495",
        },
        dialogFormVisible: false,
        form:{
            u_name:"段云锋",
            u_id:"1740501210601",
            u_cs:"软件工程2106",
            u_sex:"1",
            u_phone:"13891347495",
        }
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
    .box{
        width:60%;
        height:60vh;
        border:1px solid #DCDFE6;

        margin:100px auto;

        border-radius: 20px;
        box-shadow: 0px 0px 20px #DCDFE6;

        padding-left:10%;
        padding-right:10%;

        text-align: center;
        
    }
    .touxiang{
        height: 100px;
        padding-top:15px;
        margin-bottom: 50px;
    }
    .el-row {
        margin-bottom: 5px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
        text-align: right;
        line-height: 36px;
        color: black;
    }
    .bg-purple-light {
        background: #e5e9f2;
        text-align: left;
        line-height: 36px;
        color: gray;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        
    }
    .btn{
        margin-top:20px;
        
    }
</style>