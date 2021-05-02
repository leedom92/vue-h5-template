import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router.config'
import setPageTitle from '_u/set-page-title'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  NProgress.start()
  document.title = setPageTitle(to.meta.title)
  next()
  NProgress.done()
})

export default router
