/*
  todo 路由器js模块
 */
 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import home from '../components/home/home.vue'
 import beauty from '../components/beauty/beauty.vue'
 import daily from '../components/daily/daily.vue'
 import foods from '../components/foods/foods.vue'
 import health from '../components/health/health.vue'
 import toys from '../components/toys/toys.vue'
 import login from '../components/login/login.vue'
 import shopcart from '../components/shopcart/shopcart.vue'
 import classify from '../components/classify/classify.vue'
 // import indexPage from '../components/indexPage/indexPage.vue'
 import register from '../components/register/register.vue'
 import usercenter from '../components/usercenter/usercenter.vue'

/*
// todo 首屏优化 将各路由组件分开打包
const goods = () => import('../components/goods/goods.vue')
const ratings = () => import('../components/ratings/ratings.vue')
const seller = () => import('../components/seller/seller.vue')
*/

 Vue.use(VueRouter)

 export default new VueRouter({
   routes: [
     {
       path: '/home',
       component: home
     },
     {
       path: '/',
       // todo 默认路由的路径设置 重定向属性 需要写成字符串格式
       redirect: '/home'
     },
     {
       path: '/classify',
       component: classify
     },
     {
       path: '/shopcart',
       component: shopcart
     },
     {
       path: '/foods',
       component: foods
     },
     {
       path: '/health',
       component: health
     },
     {
       path: '/toys',
       component: toys
     },
     {
       path: '/daily',
       component: daily
     },
     {
       path: '/beauty',
       component: beauty
     },
     {
       path: '/login',
       component: login
     },
     {
       path: '/register',
       component: register
     },
     {
       path: '/usercenter',
       component: usercenter
     }
   ]

 })
