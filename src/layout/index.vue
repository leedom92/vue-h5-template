/**
* Created by leedom on 2021-04-30 13:52:20
*/

<script>
import TabBar from '_c/TabBar/index'
import { basicRoutes } from '@/router/router.config'
export default {
  name: 'LayoutPage',
  components: {
    TabBar,
  },
  props: {},
  data() {
    return {
      routeList: basicRoutes[0].children.filter(v => v.meta.show),
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<template>
  <div>
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="animate__animated animate__fadeIn" />
    </keep-alive>
    <router-view v-else class="animate__animated animate__fadeIn" />
    <TabBar :routes="routeList" />
  </div>
</template>
