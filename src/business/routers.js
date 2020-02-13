export const routers = [
  {
    name: 'profitUser',
    path: '/user/profit',
    component: '/pages/user/User',
    // hidden: true,
    // alwaysShow:false,
    meta: {
      title: '用户中心',
      keepAlive: false,
      icon: 'dollar', 
      internalOrExternal: false
    }
  },
//   {
//     name: 'cart',
//     path: '/dashboard/cart',
//     component: '/pages/cart/Cart',
//     meta: {
//       title: '购物车',
//       keepAlive: false,
//       icon: 'dollar',
//       internalOrExternal: false
//     }
//   },
  {
    name: 'goodsDetail',
    path: '/goods/detail',
    component: '/pages/goods/Goods',
    meta: {
      title: '商品详情',
      keepAlive: false,
      icon: 'dollar', 
      internalOrExternal: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboardMain',
    component: 'layouts/TabLayout',
    meta: { title: '首页' },
    redirect: '/dashboard/profit',
    children: [
      {
        name: 'profit',
        path: '/dashboard/profit',
        component: '/pages/user/User',
        // hidden: true,
        // alwaysShow:false,
        meta: {
          title: '用户中心',
          keepAlive: false,
          icon: 'dollar',
          internalOrExternal: false
        }
      },
      {
        name: 'profitList',
        path: '/dashboard/List',
        component: '/pages/dashboard/List',
        // hidden: true,
        // alwaysShow:false,
        meta: {
          title: '用户中心',
          keepAlive: false,
          icon: 'dollar',
          internalOrExternal: false
        }
      },
      {
        name: 'cart',
        path: '/dashboard/cart',
        component: '/pages/cart/Cart',
        meta: {
          title: '购物车',
          keepAlive: false,
          icon: 'dollar',
          internalOrExternal: false
        }
      },
      {
        name: 'goods',
        path: '/dashboard/goods',
        component: '/pages/goods/Goods',
        meta: {
          title: '商品详情',
          keepAlive: false,
          icon: 'dollar',
          internalOrExternal: false
        }
      }
    ]
  }
]
