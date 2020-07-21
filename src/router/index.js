import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/aboutcompany',
    name: 'AboutCompany',
    component: () => import('../views/AboutCompany.vue')
  },
  {
    path: '/discounts',
    name: 'Discounts',
    component: () => import('../views/Discounts.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('../views/Delivery.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/productpage/:id',
    name: 'ProductPage',
    component: () => import('../views/ProductPage.vue')
  },
  {
    path: '/PersonalArea',
    name: 'PersonalArea',
    component: () => import('../views/PersonalArea.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import('../views/Basket.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: () => import('../views/Payment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
