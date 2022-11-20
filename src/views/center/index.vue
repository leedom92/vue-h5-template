/** * Created by Leedom on 2022-11-16 01:15:00 */

<template>
  <div class="center">
    <div
      class="animate__animated animate__bounce flex flex-col justify-center items-center min-h-screen"
    >
      <img class="w-20" :src="require('_i/logo.png')" alt="" />
      <h2 class="p-4 text-gray-800">VUE H5 开发模版</h2>
      <p class="text-center text-gray-500">
        项目地址：<a
          href="https://github.com/leedom92/vue-h5-template"
          target="_blank"
          rel="noopener noreferrer"
          >https://github.com/leedom92/vue-h5-template</a
        >
      </p>
      <p class="text-gray-500 p-4">项目作者：Leedom</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterComponent',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    //
  },
  mounted() {
    //
  },
  methods: {}
}
</script>

<style scoped lang="scss">
// css
</style>
