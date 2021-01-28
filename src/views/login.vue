<template>
  <div class="login">
    <div class="box">
      <div class="top">
        <h5>请登录</h5>
      </div>
      <div class="content">
        <el-form label-width="80px">
          <el-form-item>
            <el-input
              placeholder="username"
              v-model="username"
            ></el-input>
            <el-input
              placeholder="password"
              v-model="password"
            ></el-input>
            <el-button
              type="primary"
              @click="login"
            >Login</el-button>
          </el-form-item>
        </el-form>
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
      username: "admin",
      password: "admin"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async login() {
      let params = {
        username: this.username,
        password: this.password
      }
      let { data: res } = await this.$http.login(params)
      console.log(res);
      let userInfo = JSON.stringify(res)

      window.localStorage.setItem('userInfo', userInfo)
      this.$router.push('/home')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

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
.box {
  width: 500px;
  height: 200px;
  border: 1px solid #f5f5f5;
  margin: auto;
  margin-top: 50px;
  .top {
    width: 100%;
    height: 50px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    h5 {
      margin-left: 20px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    .el-form {
      width: 90%;
      .el-form-item {
        .el-input {
          margin-top: 20px;
        }
        .el-button {
          margin-top: 20px;
          width: 100%;
        }
      }
    }
  }
}
</style>