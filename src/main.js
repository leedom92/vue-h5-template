import Vue from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

import './styles/index.scss'

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')
