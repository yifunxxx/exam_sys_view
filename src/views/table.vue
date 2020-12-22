<template>
  <div class="box">
    <download-excel
      :fields="fields"
      :data="tableData"
      name="用户数据"
      type="xls"
    >
      <el-button type="primary" icon="el-icon-download">导出表格</el-button>
    </download-excel>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      border
      style="width: 100%"
      stripe
      highlight-current-row
      row-key="id"
      @selection-change="selectTable"
    >
      <el-table-column type="selection" width="55" reserve-selection>
      </el-table-column>
      <el-table-column label="序号">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column label="图片">
        <template>
          <el-image :src="imgUrl" :preview-src-list="[imgUrl]"> </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.$index)"
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>

<script>
import JsonExcel from "vue-json-excel";
export default {
  components: {
    "download-excel": JsonExcel,
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      fields: {
        日期: "date",
        姓名: "name",
        省份: "province",
        市区: "city",
        地址: "address",
        邮编: "zip",
      },
      imgUrl:
        "https://sucai.suoluomei.cn/sucai_zs/images/20200711135449-b3a2a02b62999fa7ebcebcd9fad537d.jpg",
    };
  },
  mounted() {
    this.moreData();
  },
  methods: {
    moreData() {
      var list = [];
      for (let i = 0; i < 50; i++) {
        list.push({
          id: i,
          date: "2016-05-02",
          name: "王小虎" + i,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200000,
        });
      }
      this.tableData = list;
    },

    deleteRow(index) {
      this.$confirm("确认是否删除该信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.tableData.splice(index, 1);
      });
    },

    handleSizeChange: function (size) {
      this.pagesize = size;
    },

    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    },

    // 选择的数据
    selectTable(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  padding: 30px;
  box-sizing: border-box;
}
</style>