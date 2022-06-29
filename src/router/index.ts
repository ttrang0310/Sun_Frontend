import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add_product',
      name: 'Add product',
      component: () => import('../views/AddProduct.vue'),
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/manage',
      name: 'Manage',
      component: () => import('../views/Manage.vue')
    },
    {
      path: '/detail_product',
      name: 'Detail Product',
      component: () => import('../views/DetailProduct.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Product.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path == "/signin"){
    next()
  }
  else if (localStorage.getItem('login_status') != 'logged'){
    next("/signin")
  }
  else {
    next()
  }
  next()
})

export default router
