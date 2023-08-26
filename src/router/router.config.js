import Layout from '@/layout'

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
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '首页', icon: 'wap-home-o', keepAlive: true, show: true },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: { title: '关于', icon: 'user-o', keepAlive: true, show: true },
      },
    ],
  },
]
