/**
* Created by leedom on 2021-04-30 14:03:00
*/

<template>
  <div class='about'>
    <div class="d-flex flex-column jc-center ai-center animate__animated animate__bounce" style="margin-top: 33.33%;">
      <img :src="require('_i/logo.png')" alt="">
      <h2>VUE H5 开发模版</h2>
      <p class="text-center ">
        项目地址：<a href="https://github.com/leedom92/vue-h5-template" target="_blank" rel="noopener noreferrer">https://github.com/leedom92/vue-h5-template</a>
      </p>
      <p>项目作者：Leedom</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang='scss'>
@import '_s/variables.scss';
.about {
  * {
    margin-bottom: 1rem;
  }
  img {
    width: 120px;
  }
  p {
    color: $gray-8;
  }
}
</style>
