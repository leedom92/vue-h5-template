import Layout from '@/layout/index.vue'

/**
 * 路由表
 */
export const basicRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', keepAlive: true },
    children: [
      {
        path: '/',
        name: 'HomeView',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'wap-home-o', keepAlive: true, show: true }
      },
      {
        path: '/center',
        name: 'CenterView',
        component: () => import('@/views/center/index.vue'),
        meta: { title: '关于', icon: 'user-o', keepAlive: true, show: true }
      },
      {
        path: '/vue',
        name: 'VueView',
        component: () => import('@/views/vue/index.vue'),
        meta: { title: 'Vue', icon: '' }
      }
    ]
  }
]