<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { author, github, homepage } = storeToRefs(userStore)

const { greet } = userStore
</script>

<template>
  <div class="center">
    <div class="flex min-h-screen flex-col items-center justify-center">
      <svg-icon name="leedom" class="size-28" />
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
      <p class="p-4 text-gray-500">
        <span @click="greet">项目作者</span>：
        <a
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center"
        >
          <span class="icon-[logos--github-icon] mr-1 size-4" /> {{ author }}
        </a>
      </p>
    </div>
  </div>
</template>
