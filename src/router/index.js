import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import setPageTitle from '_u/set-page-title'
import { constantRoutes } from '@/router/router.config'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  NProgress.start()
  document.title = setPageTitle(to.meta.title)
  next()
  NProgress.done()
})

export default router
