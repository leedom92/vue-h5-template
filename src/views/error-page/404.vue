/**
* Created by leedom on 2021-05-03 01:50:51
*/

<script>
export default {
  name: 'Error404Page',
  components: {},
  props: {},
  data() {
    return {
      time: 5,
    }
  },
  watch: {},
  created() {},
  mounted() {
    setInterval(() => {
      this.time--
      if (this.time === 0) {
        this.returnHome()
      }
    }, 1000)
  },
  methods: {
    returnHome() {
      this.$router.replace('/')
    },
  },
}
</script>

<template>
  <div class="no-page">
    <div class="flex flex-col justify-center items-center animate__animated animate__backInDown">
      <h1>404</h1>
      <p>
        {{ time }}秒后回到首页
      </p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.no-page {
  padding-top: 40vh;
}
</style>
