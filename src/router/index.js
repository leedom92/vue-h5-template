import Vue from 'vue'
import VueRouter from 'vue-router'
import { basicRoutes } from './router.config'
import setPageTitle from '_u/set-page-title'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404' }
]

export const routes = [...basicRoutes, ...constantRoutes]

const router = new VueRouter({
  // mode: 'history',
  base: import.meta.env.BASE_URL,
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
