<script setup>
import { constantRoutes } from '@/router/router.config'

const route = useRoute()
const routeList = computed(() => constantRoutes[0].children.filter(v => v.meta.show))
</script>

<template>
  <router-view v-if="route.meta.keepAlive" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>

  <router-view v-else :key="route.path" />
  <TabBar v-if="route.meta.tabShow" :routes="routeList" />
</template>
