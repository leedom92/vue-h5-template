/** * Created by Leedom on 2022-11-16 01:33:28 */

<template>
  <div>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
    <tab-bar v-if="$route.meta.show" :routes="routeList" />
  </div>
</template>

<script>
import TabBar from '_c/TabBar/index.vue'
import { basicRoutes } from '@/router/router.config'
export default {
  name: 'LayoutComponent',
  components: {
    TabBar
  },
  props: {},
  data() {
    return {
      routeList: basicRoutes[0].children.filter((v) => v.meta.show)
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
