import Vue from 'vue'
import Router from 'vue-router'
// import tabBar from '@/components/tabBar'

import home from '@/views/home/home'
import goodsinfor from "@/components/goodsinfor"
import goodsSearch from "@/components/goodsSearch"
import orderok from "@/components/order"
import shoping from "@/views/shoping"
import homegoods from "@/views/home/homegoods"

import special from "@/views/special/special"
import sort from "@/views/sort/sort"
import shopcar from "@/views/shopcar/shopcar"

import my from "@/views/my/my"
import login from "@/components/login"
import myscroll from "@/components/myscroll"
import myset from '@/views/my/myset'

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/myscroll',
      name:'myscroll',
      component:myscroll,
      meta:{isLogin:false}
    },
    {
      path:'/myset',
      name:'myset',
      component:myset,
      meta:{isLogin:false}
    },
     {
       path: '/login',
       name: 'login',
       component: login,
       meta:{isLogin:false}
     },
    {
      path: '/shoping',
      name: 'shoping',
      component: shoping,
      meta:{isLogin:false}
    },
    {
      path: '/goodsSearch',
      name: 'goodsSearch',
      component: goodsSearch,
      meta:{isLogin:false}
    },
    {
      path: '/home',
      name: 'home',
      component:home,
      meta:{isLogin:false}
    },{
      path: '/goodsinfor/:id',
      name: 'goodsinfor',
      meta:{isLogin:false},
      component: goodsinfor
    },
    {
      path: '/homegoods/:id',
      name: 'homegoods',
      meta:{isLogin:false},
      component: homegoods
    },
    {
      path: '/orderok',
      name: 'orderok',
      component: orderok,
      meta:{isLogin:true}
    },{
      path: '/special',
      name: 'special',
      component: special,
      meta:{isLogin:false}
    },{
      path: '/sort',
      name: 'sort',
      component: sort,
      meta:{isLogin:false}
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar,
      meta:{isLogin:false}
    },{
      path: '/my',
      name: 'my',
      component: my,
      meta:{isLogin:false}
    }
    // {
    //   path: '**',   // 错误路由[写在最后一个]
    //   redirect: '/home'   //重定向
    // }
  ]
})
