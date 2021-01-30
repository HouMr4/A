<template>
  <div>

    <div class="top">
      <h1>商品管理</h1>
      <el-button type="primary">添加商品</el-button>
    </div>
    <div class="content">
      <div class="content-top">
        <el-select
          v-model="cha"
          placeholder="按商品id查询"
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
          v-model="product"
          placeholder="关键词"
        ></el-input>
        <el-button @click="search()">查询</el-button>
      </div>
      <div class="content-content">
        <el-table
          :data="list"
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="id"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="信息"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格"
            width="180"
          >
          </el-table-column>
          <el-table-column
            label="状态"
            width="180"
          >
            <template slot-scope="scope">
              {{scope.row.status===1?'在售':'已下架'}}
              <el-button
                class="anniu"
                @click="huan(scope.row)"
              >
                {{scope.row.status===1?'下架':'上架'}}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作"
          >
            <template slot-scope="scope2">
              <el-button
                size="mini"
                @click="chakan(scope2.row)"
                class="but"
              >查看</el-button>
              <el-button
                size="mini"
                @click="bick(scope2.row)"
                class="but"
              >编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="1000"
          :page-size="100"
          :current-page="pageNum"
        >
        </el-pagination>
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
        value: 'a',
        label: '按商品id查询'
      }, {
        value: 'b',
        label: '按商品名称查询'
      }],
      cha: '',
      pageNum: 1,
      product: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async huan(i) {
      console.log(i);
      if (i.status === 1) {
        let params = {
          productId: i.id,
          status: 2
        }
        let { data: res } = await this.$http.status(params)
        console.log(res);
      } else {
        let params = {
          productId: i.id,
          status: 1
        }
        let { data: res } = await this.$http.status(params)
        console.log(res);
      }
      this.menu()
    },
    chakan(i) {
      this.$router.push({
        path: '/product/detail',
        query: {
          id: i.id
        }
      })
    },
    bick(i) {
      this.$router.push({
        path: '/home/modityemit',
        query: {
          id: i.id
        }
      })
    },
    async search() {
      if (this.cha == 'b') {
        let params = {
          pageNum: this.pageNum,
          product: this.product
        }
        let { data: res } = await this.$http.search2(params)
        console.log(res);
        this.list = res.list
      } else {
        let params = {
          pageNum: this.pageNum,
          productId: this.product
        }
        let { data: res } = await this.$http.search(params)
        console.log(res);
        this.list = res.list
      }
    },
    async menu() {
      let params = {
        pageNum: this.pageNum
      }
      let { data: res } = await this.$http.product(params)
      console.log(res);
      this.list = res.list
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageNum = val
      this.menu()
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