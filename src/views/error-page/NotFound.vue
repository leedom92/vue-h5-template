<script setup>
const router = useRouter()
const time = ref(5)
const inter = ref(null)

onMounted(() => {
  inter.value = setInterval(() => {
    time.value--
    time.value === 0 && router.replace('/')
  }, 1000)
})

onUnmounted(() => {
  clearInterval(inter.value)
})
</script>

<template>
  <div class="no-page">
    <div class="flex flex-col items-center justify-center">
      <h1>404</h1>
      <p>{{ time }}秒后回到首页</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-page {
  padding-top: 40vh;
}
</style>
