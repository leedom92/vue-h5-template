/** * Created by Leedom on 2022-11-17 07:49:19 */

<template>
  <div class="vue h-screen flex flex-col items-center justify-center">
    <img class="w-32 animate__animated animate__rubberBand" src="@/assets/logo.svg" alt="" />
    <div class="mt-6">
      <a
        class="text-2xl text-green-700"
        href="https://vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
        >Vue</a
      >
    </div>
    <van-button class="mt-6" plain type="primary" @click="$router.push('/')">返回首页</van-button>
  </div>
</template>

<script>
export default {
  name: 'VueComponent',
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
