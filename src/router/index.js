import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  NProgress.start()
  next()
  NProgress.done()
})

export default router
