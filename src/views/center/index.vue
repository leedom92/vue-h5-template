<script setup>
import { useUserStore } from '@/stores/user'

const { author, github, homepage } = useUserStore()

const logo = new URL('_i/logo.png', import.meta.url)
</script>

<template>
  <div class="center">
    <div class="flex flex-col justify-center items-center min-h-screen">
      <img
        class="w-20"
        :src="logo"
        alt=""
      >
      <h2 class="p-4 text-gray-800">
        VUE H5 开发模版
      </h2>
      <p class="text-center text-gray-500">
        项目地址：<a
          :href="homepage"
          target="_blank"
          rel="noopener noreferrer"
        >{{ homepage }}</a>
      </p>
      <p class="text-gray-500 p-4">
        <span @click="greet">项目作者</span>：
        <a
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
        >{{ author }}</a>
      </p>
    </div>
  </div>
</template>
