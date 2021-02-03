<template>
  <div class="category">
    <div class="top">
      <h1>品类管理</h1>
    </div>
    <div class="top2">
      <p>当前商品分类ID:{{id}}</p>
    </div>
    <div class="content">
      <el-table
        :data="list"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="品类ID"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="品类名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop=""
          label="操作"
        >
          <template slot-scope="scope">
            <span @click="dialogVisible = true;xiugai(scope.row)">修改名称</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="请输入新的品类名称"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-input
        v-model="name"
        placeholder="请输入内容"
      ></el-input>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false;queding()"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      list: [],
      dialogVisible: false,
      categotyId: '',
      name: '',
      id: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async categoryId() {
      let params = {
        categoryId: this.id
      }
      let { data: res } = await this.$http.fenlei1(params)
      console.log(res);
      this.list = res
    },
    xiugai(scope) {
      this.name = scope.name;
      this.categoryId = scope.id
    },
    async queding() {
      let params = {
        categoryId: this.categoryId,
        categoryName: this.name
      }
      let { data: res } = await this.$http.xiugai(params)
      this.$message({
        message: '修改成功',
        type: 'success'
      });
      let params1 = {
        categoryId: this.id
      }
      let { data: res1 } = await this.$http.fenlei1(params1)
      console.log(res1);
      this.list = res1
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.query.id
    this.categoryId()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' >
.category {
  text-align: left;
}
.top {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid gray;
}
.top2 {
  height: 50px;
  line-height: 50px;
}
.btn {
  margin-left: 20px;
}
.el-dialog__header {
  height: 50px;
}
.el-dialog__body {
  height: 50px;
}
</style>