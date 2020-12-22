<template>
  <div class="box">
    <div class="main">
      <div class="title">在线考试系统登录</div>
      <el-form class="form" ref='form' :model="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
          v-model="form.userName"
          prop='userName'
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="form.passWord"
          show-password
          >
          </el-input>
        </el-form-item>
        
        <div class="btn" @click="onSubmit('form')">
          <el-button type="primary" :loading="isLoading">登录</el-button>
        </div>
      </el-form>
      <el-link type='info'>注册</el-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        userName: "123456",
        passWord: "123456",
      },
      rules:{
        userName:[
          {required:true,message:'请输入用户账号',trigger:'blur'}
        ],
        passWord:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:6,message:'长度不得小于6位',trigger:'blur'}
        ]
      },
      isLoading: false,
    };
  },
  methods: {
    onSubmit(formName) {
      this.isLoading = true;
      this.$refs[formName].validate((valid) =>{
        var vm = this;
        if(valid){
          const m1 = this.$message({
            dangerouslyUseHTMLString: true,
            center:true,
            iconClass:'el-icon-loading',
            message: '<strong>正在登录...</strong>'
          });
          this.axios({
            method:'get',
            url:'/login.json',
            data:{
              userName:vm.form.userName,
              passWord:vm.form.passWord                              
            }
          }).then((res)=>{
            m1.close();
            if(res.data == '123456'){
              this.$message({
                message:'登录成功！',
                type:'success'
              });
              //跳转到主页
              console.log("1");
              localStorage.setItem('userInfo','123465');
              this.$router.push('/main');
              console.log("2");
            }else{
              this.$message.error('账号或密码不正确!');
            }
          }).catch((error)=>{
            m1.close();
            this.$message.error('请求失败!');
          });
        }
        else{
          this.$message.error('账号或密码格式不正确!');
          return false;
        }
      });
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>

.box {
  width: 100%;
  height: 100vh;
  background-color: #2d3a4b;
  overflow: hidden;
}

.main {
  width: 400px;
  margin: 200px auto;
}

.title {
  text-align: center;
  font-size: 26px;
  color: #eee;
  font-weight: 600;
}

.form {
  margin-top: 40px;
}

.btn .el-button {
  width: 100%;
  margin-top: 25px;
}

@media (max-width: 500px) {
  .main {
    width: 320px;
  }
}
</style>