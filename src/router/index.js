import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../layout/Detail.vue'
const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router