// @ts-nocheck
import { BlankLayout, BasicLayout, TabLayout } from '../components/layouts'

import { routers } from '../business'
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: BlankLayout,
    redirect: '/user/login',
    // hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import('@/views/user/RegisterResult')
      }, 
    ]
  }, 
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
]


/**
 * 走菜单，走权限控制
 * @type {[null,null]}
 */
export const asyncRouterMap = [
    {
      path: '/',
      name: 'dashboard',
      component: TabLayout,
      meta: { title: '首页' },
      redirect: '/dashboard/cart',
      children: []
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]


  
// 不需要服务端控制
export const localRouterConfig = {
    allAuth: [
      // 按钮权限
    ],
    auth: [
      // 按钮权限
    ],
    menu: [ 
      ...routers
    ]
  }