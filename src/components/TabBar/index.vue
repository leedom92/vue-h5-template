/** * Created by Leedom on 2022-11-16 01:46:11 */

<template>
  <van-tabbar v-model="active">
    <template v-for="(item, $index) in routes">
      <van-tabbar-item :key="$index" replace :name="item.name" :to="item.path" :icon="item.meta.icon">{{ item.meta.title }}</van-tabbar-item>
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
    return {
      active: this.$route.name
    }
  },
  watch: {},
  created() {
    console.log('this.$route :>> ', this.$route);
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
