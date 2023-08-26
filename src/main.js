import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/vant.js'
import { __ctx } from '@/config'

import 'animate.css'

import '@/styles/tailwind.css'

Vue.prototype.$__ctx = __ctx

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
