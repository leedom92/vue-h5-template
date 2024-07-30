<script setup>
const route = useRoute()
const props = defineProps({
  routes: Array,
})

const active = ref(route.name)
</script>

<template>
  <van-tabbar v-model="active" class="!fixed">
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
