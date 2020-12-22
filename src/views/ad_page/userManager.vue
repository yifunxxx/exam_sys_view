<template>
  <div class="alluser">
    <el-form class="searchBox" ref="form" :model="form" label-width="80px">
        <el-form-item>
            <el-col :span="8">
                <el-form-item label="姓名"><el-input v-model="form.u_name"></el-input></el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="学号/工号"><el-input v-model="form.u_id"></el-input></el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="手机号"><el-input v-model="form.u_phone"></el-input></el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="6">
                <el-form-item label="班级"><el-input v-model="form.u_cs"></el-input></el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="性别">
                    <el-radio-group v-model="form.u_sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="身份">
                    <el-radio-group v-model="form.u_type">
                    <el-radio label="教师"></el-radio>
                    <el-radio label="学生"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="dimSearch">立即查询</el-button>
                <el-button @click="clear">重置</el-button>
            </el-col>
        </el-form-item>
    </el-form>
    <div class="tableBox">
        <el-button type="primary" icon="el-icon-plus">添加用户</el-button><br/><br/>
        <el-table 
        stripe :data="users.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
        border height="328">
            <el-table-column type="index" fixed="left"></el-table-column>
            <el-table-column prop="u_name" label="姓名" ></el-table-column>
            <el-table-column prop="u_type" label="身份" ></el-table-column>
            <el-table-column prop="u_id" label="学号/工号" width='130'></el-table-column>
            <el-table-column prop="u_sex" label="性别" >
              <template slot-scope="scope">
                <span>{{scope.row.u_sex == '0'?'男':'女'}}</span>
              </template>
            </el-table-column>
            <el-table-column  prop="u_cs" label="班级" ></el-table-column>
            <el-table-column  prop="u_phone" label="手机号" > </el-table-column>
            <el-table-column  prop="u_avaliable" label="状态" >
              <template slot-scope="scope">
                <span :class="scope.row.u_avaliable === '1' ? 'Tavailable' : 'Favailable'">{{scope.row.u_avaliable == '1' ? '可用':'不可用'}}</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width='220'>
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                <el-popconfirm title="确定重置？"
                  @confirm="resetPas(scope.row)"
                  icon="el-icon-info"
                  icon-color="red"
                  style="margin-right:10px;margin-left:10px"
                  >
                  <el-button type="text" size="small" slot="reference">重置密码</el-button>
                </el-popconfirm>
                <el-button type="text" size="small" @click="deleteUser(scope.row)">删除</el-button>
                <el-button type="text" size="small" @click="distDialog(scope.row)">分配角色</el-button>
            </template>c
            </el-table-column>
        </el-table>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagesize"
        :total="users.length"
        layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </div>
    <!-- 编辑用户弹出层开始 -->
    <el-dialog
      title="用户详情"
      :visible.sync="dialogEditVisible">
      <el-form class="editBox" ref="editForm" :model="editForm" label-width="85px" :rules="rules">
        <el-form-item>
            <el-col :span="10">
                <el-form-item label="姓名" prop="u_name"><el-input v-model="editForm.u_name"></el-input></el-form-item>
            </el-col>
            <el-col :span="10">
                <el-form-item label="学号/工号" prop="u_id"><el-input v-model="editForm.u_id"></el-input></el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="10">
                <el-form-item label="班级" prop="u_cs"><el-input v-model="editForm.u_cs"></el-input></el-form-item>
            </el-col>
            <el-col :span="10">
                <el-form-item label="手机号" prop="u_phone"><el-input v-model="editForm.u_phone"></el-input></el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="10">
            <el-form-item label="性别">
                    <el-radio-group v-model="editForm.u_sex">
                    <el-radio label="0">男</el-radio>
                    <el-radio label="1">女</el-radio>
                    </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="是否可用">
                    <el-radio-group v-model="editForm.u_avaliable">
                    <el-radio label="1">可用</el-radio>
                    <el-radio label="0">不可用</el-radio>
                    </el-radio-group>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-popconfirm title="确定修改？"
          @confirm="updateInfo('editForm')"
          icon="el-icon-info"
          icon-color="red"
          style="margin-right:10px"
          >
          <el-button type="primary" slot="reference">确认修改</el-button>
        </el-popconfirm>
        <el-button type="info" @click="dialogEditVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑用户弹出层结束 -->

    <!-- 分配用户角色弹出层开始 -->
    <el-dialog
      title="分配distname所拥有的角色"
      :visible.sync="dialogDistRoleVisible">
      
      <el-table
        :data="roles"
        style="width: 100%"
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="r_id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="r_name"
          label="角色名">
        </el-table-column>
        <el-table-column
          prop="r_desc"
          label="角色描述"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-popconfirm title="确定分配？"
          @confirm="updateInfo('editForm')"
          icon="el-icon-info"
          icon-color="red"
          style="margin-right:10px"
          >
          <el-button type="primary" slot="reference">确认分配</el-button>
        </el-popconfirm>
        <el-button type="info" @click="dialogDistRoleVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 分配用户角色弹出层结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
       form: {
          u_name:''
          ,u_id:''
          ,u_phone:''
          ,u_type:''
          ,u_sex:''
          ,u_cs:''
          ,u_avaliable:''
        },
        editForm: {
          u_name:''
          ,u_id:''
          ,u_phone:''
          ,u_type:''
          ,u_sex:''
          ,u_cs:''
          ,u_avaliable:''
        },
        rules:{
          u_name:[
            {required:true,message:'请输入用户账号',trigger:'blur'}
          ],
          u_id:[
            {required:true,message:'请输入学号\工号',trigger:'blur'},
          ],
          u_cs:[
            {required:true,message:'请输入班级',trigger:'blur'}
          ],
          u_phone:[
            {required:true,message:'请输入手机号',trigger:'blur'},
            {
              pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
              message:'请输入正确的手机号',
              trigger:'blur'
             }
          ],
        },
        roles:[],
        users: [],
        distname:'',
       currentPage:1,
       pagesize:10,
       dialogEditVisible:false,
       dialogDistRoleVisible:false
    };
  },
  created () {
    this.initTable();
  },
  mounted() {},
  methods: {
      edit(row) {
        this.editForm.u_name = row.u_name;
        this.editForm.u_id = row.u_id;
        this.editForm.u_phone = row.u_phone;
        this.editForm.u_cs = row.u_cs;
        this.editForm.u_sex = row.u_sex;
        this.editForm.u_avaliable = row.u_avaliable;
        this.dialogEditVisible = true;
      },
      handleSizeChange: function(val) {
        this.pagesize = val;
      },
      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
      },
      initTable(){
        var vm = this;
        this.axios({
          method:'get',
          url:'https://www.fastmock.site/mock/3696eeeba2eba006f0a086cb181711de/exam_net/alluser',
        })
        .then(function(res){
          vm.users = res.data.data.users;
        });
      },
      updateInfo(formName){
        this.$refs[formName].validate((valid) =>{
          var vm = this;
          if(valid){
            this.axios({
              method:'put',
              url:'https://www.fastmock.site/mock/3696eeeba2eba006f0a086cb181711de/exam_net/updateuser',
              data:vm.editForm
            })
            .then(function(res){
              if(res.data.code == 0){
                vm.dialogEditVisible = false;
                vm.$message({
                  message:'更新成功！',
                  type:'success'
                });
                vm.initTable();
              }
              else{
                vm.$message.error('更新失败!');
              }
            }).catch((error)=>{
              vm.$message.error('请求失败!');
            });
          }
          else{
            this.$message.error('数据格式不正确!');
            return false;
          }
        });
        
      },
      resetPas(row){
        var vm = this;
        var uid = row.u_id;
        this.axios({
              method:'put',
              url:'https://www.fastmock.site/mock/3696eeeba2eba006f0a086cb181711de/exam_net/updateuser',
              data:{
                uid:uid
              }
            })
            .then(function(res){
              if(res.data.code == 0){
                vm.dialogEditVisible = false;
                vm.$message({
                  message:'重置成功！',
                  type:'success'
                });
              }
              else{
                vm.$message.error('重置失败!');
              }
            }).catch((error)=>{
              vm.$message.error('请求失败!');
            });
      },
      deleteUser(row) {
        var vm = this;
        var uid = row.u_id;
        this.$confirm('确认删除该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios({
              method:'delete',
              url:'https://www.fastmock.site/mock/3696eeeba2eba006f0a086cb181711de/exam_net/deleteuser',
              data:{
                uid:uid
              }
            })
            .then(function(res){
              if(res.data.code == 0){
                vm.$message({
                  message:'删除成功！',
                  type:'success'
                });
                vm.initTable();
              }
              else{
                vm.$message.error('删除失败!');
              }
            }).catch((error)=>{
              vm.$message.error('请求失败!');
            });
        }).catch(() => {
          vm.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      dimSearch(){
        var vm = this;
        this.axios({
          method:'get',
          url:'https://www.fastmock.site/mock/3696eeeba2eba006f0a086cb181711de/exam_net/getuser',
          data:{
            u_id:vm.form.u_id,
            u_name:vm.form.u_name,
            u_phone:vm.form.u_phone,
            u_cs:vm.form.u_cs,
            u_sex:vm.form.u_sex == '' ? '' : vm.form.u_sex == '男' ? '0' : '1',
            u_type:vm.form.u_type == '' ? '' : vm.for.u_type == '教师' ? '0' : '1'
          }
        })
        .then(function(res){
          vm.users = res.data.data.users;
        }).catch((error)=>{
          vm.$message.error('请求失败!');
        });
      },
      clear(){
        this.form.u_name = '';
        this.form.u_id = '';
        this.form.u_phone = '';
        this.form.u_cs = '';
        this.form.u_sex = '';
        this.form.u_avaliable = '';
        this.form.u_avaliable = '';
        this.form.u_type = '';
      },
      distDialog(row){
        var vm = this;
        vm.distname = row.u_name;
        vm.dialogDistRoleVisible = true;
      }
  },
};
</script>

<style lang="less" scoped>
   .searchBox{
       width: 90%;
       margin: 65px auto;
       margin-bottom: 0px;
   }
   .tableBox{
       width: 80%;
       margin: 0px auto;
   }
   .Tavailable{
     color:red;
   }
   .Favailable{
     color:lightgray;
   }
</style>