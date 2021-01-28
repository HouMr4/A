<template>
  <div>

    <div class="top">
      <h1>商品管理</h1>
      <el-button type="primary">添加商品</el-button>
    </div>
    <div class="content">
      <div class="content-top">
        <el-select
          v-model="value"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="input"
          placeholder="关键词"
        ></el-input>
        <el-button>查询</el-button>
      </div>
      <div class="content-content">
        <!-- <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          >
          </el-table-column>
        </el-table> -->
      </div>
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
      options: [{
        value: '选项1',
        label: '按商品id查询'
      }, {
        value: '选项2',
        label: '按商品名称查询'
      }],
      value: '',
      input: '',
      pageNum: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    let params = {
      pageNum: this.pageNum
    }
    let { data: res } = await this.$http.product(params)
    console.log(res);
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
.top {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
}
.content {
  height: 100vh;
  .content-top {
    display: flex;
    height: 50px;
    line-height: 50px;
    .el-input {
      width: 200px;
    }
  }
}
</style>