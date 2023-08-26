/**
* Created by leedom on 2021-04-30 14:02:46
*/

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HomePage',
  components: {},
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
      'login',
    ]),
  },
}
</script>

<template>
  <div class="home p-4 animate__animated animate__fadeInDown">
    <h1 class="py-2">
      <span>VUE H5 开发模版</span>
    </h1>
    <h3 class="text-gray-600 py-4 text-2xl">
      A vue h5 template with vant ui
    </h3>
    <br>
    <van-cell-group>
      <van-cell title="Vue CLI 4" />
      <van-cell title="Vue Router" />
      <van-cell title="Vuex" />
      <van-cell title="Axios封装及接口状态码判断" />
      <van-cell title="Vant组件按需加载" />
      <van-cell title="tailwindcss" />
      <van-cell title="NProgress.js进度条" />
      <van-cell title="js-cookie存取cookie" />
      <van-cell title="jsencrypt加密" />
      <van-cell title="animate.css动画库" />
      <van-cell title="alias别名" />
    </van-cell-group>
  </div>
</template>

<style scoped lang='scss'>
@import '_s/variables';
.home {
  h1 {
    background: url('~@/assets/images/logo.png') no-repeat;
    background-size: 2.2rem;
    background-position: 0 .3rem;
    padding-left: 3rem;
  }
}
</style>
