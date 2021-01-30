<template>
  <div>
    <el-container>
      <el-header>
        <div class="left">
          <h1>MMALL ADMIN</h1>
        </div>
        <div class="right">
          欢迎,{{userInfo.username}}
          <font @click="tuichu">退出</font>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="/home/index">
              <span slot="title">Home</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <span>商品</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/product/index">商品管理</el-menu-item>
                <el-menu-item index="/product.category/index">品类管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <span>订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/order/index">订单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      userInfo: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async tuichu() {
      let res = await this.$http.logout()
      this.$router.push('/login')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(this.userInfo);
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
.el-header {
  background-color: #f8f8f8;
  color: #333;
  text-align: left;
  display: flex;
  justify-content: space-between;
  .right {
    display: flex;
    align-items: center;
    font {
      color: blue;
    }
  }
}

.el-aside {
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  line-height: 200px;
  .el-menu {
    text-align: left;
    color: blue;
  }
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>