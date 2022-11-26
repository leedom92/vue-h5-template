/** * Created by Leedom on 2022-11-16 01:14:18 */

<template>
  <div class="home p-4 animate__animated animate__fadeInDown">
    <h1 class="py-2">
      <span>VUE H5 开发模版</span>
    </h1>
    <h3 class="text-gray-600 py-4 text-2xl">A vue h5 template with vite & vant</h3>
    <br />
    <van-cell-group>
      <van-cell title="Vue2" to="vue" />
      <van-cell title="Vite" url="https://cn.vitejs.dev" />
      <van-cell title="Vue Router" />
      <van-cell title="Vant组件按需加载" url="https://vant-contrib.gitee.io/vant/v2/#/zh-CN/" />
      <van-cell title="Sass" />
      <van-cell title="Tailwindcss" url="https://tailwindcss.com" />
      <van-cell title="NProgress.js进度条" />
      <van-cell title="animate.css动画库" />
      <van-cell title="alias别名" />
      <van-cell title="Eslint + Prettier" />
    </van-cell-group>
  </div>
</template>

<script>
import { login } from '_a/user'
export default {
  name: 'HomeComponent',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    login({ username: 'leedom', code: '6666' })
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.home :deep() {
  h1 {
    background: url('@/assets/images/logo.png') no-repeat;
    background-size: 2.2rem;
    background-position: 0 0.3rem;
    padding-left: 3rem;
  }
}
</style>
