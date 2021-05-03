/**
* Created by leedom on 2021-05-03 01:50:51
*/

<template>
  <div class="no-page">
    <div class="d-flex flex-column jc-center ai-center animate__animated animate__backInDown">
      <h1>404</h1>
      <p >
        {{ time }}秒后回到首页
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
  components: {},
  props: {},
  data() {
    return {
      time: 5,
    };
  },
  watch: {},
  created() {},
  mounted() {
    setInterval(() => {
      this.time--;
      if (this.time === 0) {
        this.returnHome();
      }
    }, 1000);
  },
  methods: {
    returnHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped lang='scss'>
.no-page {
  padding-top: 40vh;
}
</style>
