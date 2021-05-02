/**
* Created by leedom on 2021-04-30 14:58:53
*/

<template>
  <van-tabbar route>
    <van-tabbar-item v-for="(item, $index) in routes" :key="$index" replace :to="item.to" :icon="item.icon">{{ item.name }}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: 'Index',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
