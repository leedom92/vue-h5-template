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
    <van-button
      class="mt-6"
      plain
      type="success"
      @click="$router.push('/')"
    >
      返回首页
    </van-button>
  </div>
</template>
