import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/Layout/layOut'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: () => import('@/views/login/index'),
    hidden: true
  },
  //   {
  //     path: '/forgetPassword',
  //     meta: { title: '忘记密码', noCache: true },
  //     component: () => import('@/views/forgetPassword/index'),
  //     hidden: true
  //   },
  //   {
  //     path: '/404',
  //     component: () => import('@/views/errorPage/404'),
  //     hidden: true
  //   },
  //   {
  //     path: '/401',
  //     component: () => import('@/views/errorPage/401'),
  //     hidden: true
  //   },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
        name: '首页',
        meta: { title: '首页驾驶舱', icon: 'index', noCache: true, affix: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
