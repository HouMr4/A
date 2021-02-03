<template>
  <div class="add2">
    <div class="top">
      <h1>品类管理--添加品类</h1>
    </div>
    <div class="content">
      <p><span>所属分类</span>
        <el-select
          v-model="value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in list"
            :key="item.id"
            :label="'/所有' + item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </p>
      <p><span>分类名称</span>
        <el-input
          v-model="input"
          placeholder="请输入内容"
        ></el-input>
      </p>
      <el-button
        type="primary"
        @click="tijiao"
      >提交</el-button>
    </div>
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
      input: '',
      parentId: 0,
      value: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async tijiao() {
      let params = {
        parentId: this.value,
        categoryName: this.input
      }
      let { data: res } = await this.$http.add2(params)
      console.log(res);
      this.$message({
        message: '添加成功',
        type: 'success'
      });
      this.$router.push('/product.category/index')
    },
    async menu() {
      let params = {
        categoryId: 0
      }
      let { data: res } = await this.$http.fenlei1(params)
      this.list = res
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.menu()
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
<style lang='scss' scoped>
.add2 {
  text-align: left;
}
.top {
  height: 50px;
  line-height: 50px;
}
.content {
  p:nth-child(1) {
    height: 50px;
  }
  p:nth-child(2) {
    display: flex;
    .el-input {
      width: 200px;
    }
  }
}
</style>