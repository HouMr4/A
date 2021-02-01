<template>
  <div>
    <div class="detail">
      <div class="top">
        <h1>商品详情</h1>
      </div>
      <div class="content">
        <p>商品名称{{list.name}}</p>
        <p>商品描述{{list.subtitle}}</p>
        <p>当前状态{{list.status===1?'在售':'已下架'}}</p>
        <p>所属分类
          <el-select
            v-model="value1"
            placeholder="请选择一级"
          >
            <el-option
              v-for="item in xiala2"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
          <el-select
            v-model="value2"
            placeholder="请选择二级"
          >
            <el-option
              v-for="item in xiala1"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </p>
        <p>商品价格{{list.price}}元</p>
        <p>商品库存{{list.stock }}</p>
        <p>商品图品</p>
        <p>商品详情<span v-html="list.detail"></span></p>
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
      parentCategoryId: 0,
      categoryId: 0,
      xiala1: [],
      xiala2: [],
      value1: "",
      value2: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async menu() {
      let params = {
        productId: this.$route.query.id
      }
      let { data: res } = await this.$http.detail(params)
      console.log(res);
      this.list = res;
      this.fenlei1()
      this.fenlei2()
    },
    async fenlei2() {
      console.log(this.list.categoryId);
      let params = {
        categoryId: 0
      }
      let { data: res } = await this.$http.fenlei1(params)
      console.log(res);
      this.xiala2 = res
    },
    async fenlei1() {
      let params = {
        categoryId: this.list.parentCategoryId
      }
      let { data: res } = await this.$http.fenlei1(params)
      console.log(res);
      this.xiala1 = res
    },
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
* {
  margin: 0;
  padding: 0;
}
.detail {
  width: 100%;
  height: 100%;
}
.top {
  height: 50px;
  line-height: 50px;
  text-align: left;
  width: 100%;
}
.content {
  text-align: left;
  padding-left: 300px;
  p {
    height: 50px;
    line-height: 50px;
  }
}
.el-dropdown-item {
  overflow: hidden;
}
.tu {
  width: 50px;
  height: 50px;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>