/**
* Created by leedom on 2021-04-30 14:58:53
*/

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
  created() {},
  mounted() {},
  methods: {},
}
</script>

<template>
  <van-tabbar v-model="active">
    <template v-for="(item, $index) in routes">
      <van-tabbar-item
        :key="$index"
        replace
        :name="item.name"
        :to="item.path"
        :icon="item.meta.icon"
      >
        {{ item.meta.title }}
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>
