/** * Created by Leedom on 2022-11-16 01:46:11 */

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="(item, $index) in routes"
      :key="$index"
      replace
      :name="item.name"
      :to="item.path"
      :icon="item.meta.icon"
    >{{ item.meta.title }}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'TabBar',
  components: {},
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: this.$route.name,
    }
  },
  watch: {},
  created() { },
  mounted() { },
  methods: {},
}
</script>

<style scoped lang="scss"></style>
