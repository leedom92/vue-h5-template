/**
* Created by leedom on 2021-04-30 14:02:46
*/

<template>
  <div class="home animate__animated animate__fadeInDown">
    <h1>
      <span>VUE H5 开发模版</span>
    </h1>
    <h3>A vue h5 template width vant ui </h3>
    <br>
    <van-cell-group>
      <van-cell title="Vue CLI 4" />
      <van-cell title="Vue Router" />
      <van-cell title="Vuex" />
      <van-cell title="Axios封装及接口状态码判断" />
      <van-cell title="Vant组件按需加载" />
      <van-cell title="Sass变量及全局样式" />
      <van-cell title="NProgress.js进度条" />
      <van-cell title="js-cookie存取cookie" />
      <van-cell title="jsencrypt加密" />
      <van-cell title="animate.css动画库" />
      <van-cell title="alias别名" />
    </van-cell-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Image, Cell, CellGroup } from 'vant'
export default {
  name: 'Index',
  components: {
    [Image.name]:Image,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  created() {
    this.login({ account: 'leedom', password: '123456', code: '6666' })
  },
  mounted() {},
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style scoped lang='scss'>
@import '_s/variables';
.home {
  padding: 10px 10px 80px 10px;
  h1 {
    background: url('~@/assets/images/logo.png') no-repeat;
    background-size: 2.2rem;
    background-position: 0 .3rem;
    padding-left: 3rem;
  }
  h3 {
    color: $gray-6;
  }
  .van-cell-group  {
    margin-top: 1.5rem;
    .van-cell {
      font-size: 1rem;
      color: $gray-8;
    }
  }
}
</style>
