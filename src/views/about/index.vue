/**
* Created by leedom on 2021-04-30 14:03:00
*/

<script>
export default {
  name: 'AboutPage',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<template>
  <div class="about">
    <div class="animate__animated animate__bounce flex flex-col justify-center items-center min-h-screen">
      <img class="w-20" :src="require('_i/logo.png')" alt="">
      <h2 class="p-4 text-gray-800">
        VUE H5 开发模版
      </h2>
      <p class="text-center text-gray-500">
        项目地址：<a href="https://github.com/leedom92/vue-h5-template" target="_blank" rel="noopener noreferrer">https://github.com/leedom92/vue-h5-template</a>
      </p>
      <p class="text-gray-500 p-4">
        项目作者：Leedom
      </p>
    </div>
  </div>
</template>
