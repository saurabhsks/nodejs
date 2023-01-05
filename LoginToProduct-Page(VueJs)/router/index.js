import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productcatalog from '../components/Productcatalog.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('../components/Testapplication.vue')
    },
    {
      path: '/',
      name: 'text',
      component: () => import('../components/Login1.vue')
    },
    {
      path: '/Aboutyou',
      name: 'Aboutyou',
      component:() => import('../components/Aboutyou.vue')
    },
    {
      path: '/Product',
      name: 'Productcatalog',
      component:Productcatalog
    }
  ]
})

export default router
