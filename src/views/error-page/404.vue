/** * Created by Leedom on 2022-11-16 01:32:55 */

<template>
  <div class="no-page">
    <div class="flex flex-col justify-center items-center">
      <h1>404</h1>
      <p>{{ time }}秒后回到首页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404Component',
  components: {},
  props: {},
  data() {
    return {
      time: 5
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
    }
  }
}
</script>

<style scoped lang="scss">
.no-page {
  padding-top: 40vh;
}
</style>
