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
          <el-dropdown trigger="click">
            <el-button type="primary">
              请选择一级品类<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item,index) in xiala1"
                :key="index"
              >{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <el-button type="primary">
              请选择二级品类<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item,index) in xiala2"
                :key="index"
              >{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </p>
        <p>商品价格{{list.price}}元</p>
        <p>商品库存{{list.stock }}</p>
        <p>商品图片<img
            :src='list.mainImage'
            alt=""
          ></p>
        <p>商品详情{{list.detail}}</p>
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
        categoryId: this.list.categoryId
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
  background: red;
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
</style>