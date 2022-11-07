/**
* Created by leedom on 2021-04-30 14:58:53
*/

<template>
  <van-tabbar route>
    <template v-for="(item, $index) in routes">
      <van-tabbar-item :key="$index" replace :to="item.path" :icon="item.meta.icon">{{ item.meta.title }}</van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Index',
  components: {},
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
