<script setup>
import setLoading from '_u/loading'

const startLoading = () => {
  setLoading(true, '加载中...')
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}

</script>

<template>
  <div class="vue h-screen flex flex-col items-center justify-center">
    <img
      class="w-32"
      src="@/assets/logo.svg"
      alt=""
    >
    <div class="mt-6">
      <a
        class="text-2xl text-green-700"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
      >Vue</a>
    </div>
    <div class="flex mt-6">
      <van-button
        class="mr-2"
        plain
        type="success"
        @click="$router.push('/')"
      >
        返回首页
      </van-button>
      <van-button plain type="primary" @click="startLoading">
        点击加载
      </van-button>
    </div>
  </div>
</template>
