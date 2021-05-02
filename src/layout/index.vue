/**
* Created by leedom on 2021-04-30 13:52:20
*/

<template>
  <div>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="animate__animated animate__fadeIn" />
    </keep-alive>
    <router-view class="animate__animated animate__fadeIn" v-else />
    <TabBar :routes="routeList" />
  </div>
</template>

<script>
import TabBar from '_c/TabBar/index'
export default {
  name: 'Layout',
  components: {
    TabBar
  },
  props: {},
  data() {
    return {
      routeList: [
        { name: '首页', to: '/', icon: 'wap-home-o' },
        { name: '关于', to: '/about', icon: 'user-o' }
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
