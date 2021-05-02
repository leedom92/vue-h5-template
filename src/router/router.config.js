import Layout from '@/layout'

/**
 * 路由表
 */
export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', keepAlive: true },
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '首页', keepAlive: true }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: { title: '关于', keepAlive: true }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404' }
]