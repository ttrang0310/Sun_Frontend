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
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path == "/login"){
    next()
  }
  // else if (!isValidJwt()){
  //   next("/login")
  // }
  else {
    next()
  }
  next()
})

export default router
