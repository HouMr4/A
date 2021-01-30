import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/menu/home.vue'),
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'index',
        component: () => import('../views/menu/index.vue')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../views/menu/product.vue'),
        children: [
          {
            path: '/product/index',
            name: 'index',
            component: () => import('../views/menu/product.vue')
          },
          {
            path: '/product.category/index',
            name: 'index',
            component: () => import('../views/menu/productcategory.vue')
          },

        ]
      },
      {
        path: '/order/index',
        component: () => import('../views/menu/order.vue')
      },
      {
        path: '/product/detail',
        name: 'index',
        component: () => import('../views/menu/detail.vue')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
