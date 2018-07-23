import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
const First = () => import('@/views/First.vue')
const Second = () => import('@/views/Second.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    }
  ]
})
