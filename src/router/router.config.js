import Layout from '@/layout/Layout.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', keepAlive: true },
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'wap-home-o', keepAlive: true, tabShow: true, show: true },
      },
      {
        path: '/center',
        name: 'CenterView',
        component: () => import('@/views/center/index.vue'),
        meta: { title: '关于', icon: 'user-o', keepAlive: true, tabShow: true, show: true },
      },
    ],
  },
  {
    path: '/vue',
    name: 'VueView',
    component: () => import('@/views/vue/index.vue'),
    meta: { title: 'Vue', icon: '' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error-page/NotFound.vue'),
  },
]
