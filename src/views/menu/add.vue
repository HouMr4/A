<template>
  <div>
    <div class="top">
      <h1>商品管理--添加商品</h1>
    </div>
    <div class="content">
      <el-form
        ref="list"
        :model="list"
        label-width="80px"
      >
        <el-form-item label="商品名称">
          <el-input
            placeholder="请输入商品名称"
            v-model="list.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input
            placeholder="请输入商品描述"
            v-model="list.subtitle"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select
            v-model="value1"
            placeholder="请选择一级"
            @change="fenlei1"
          >
            <el-option
              v-for="item1 in xiala2"
              :key="item1.id"
              :label="item1.name"
              :value="item1.id"
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
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input
            placeholder="价格"
            v-model="list.price"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input
            placeholder="库存"
            v-model="list.stock"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            class="upload-demo"
            action="http://admintest.happymmall.com/manage/product/upload.do"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button
              size="small"
              type="primary"
            >上传图片</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="tijiao"
          >确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
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
    tijiao() {
      this.$router.push('/product/index')
    },

    //一级
    async fenlei2() {
      console.log(this.list.categoryId);
      let params = {
        categoryId: 0
      }
      let { data: res } = await this.$http.fenlei1(params)
      console.log(res);
      this.xiala2 = res
    },
    //二级
    async fenlei1() {
      let params = {
        categoryId: this.value1
      }
      let { data: res } = await this.$http.fenlei1(params)
      console.log(res);
      this.xiala1 = res
    },

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fenlei2()
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
  text-align: left;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid gray;
}
.content {
  p {
    height: 50px;
    text-align: left;
  }
}
.el-form-item {
  text-align: left;
}
</style>