import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// pages
import index from './pages/index.vue'

// create router
const routes = [
  {
    path: '/',
    component: index,
    weight: 0
  }
]

export default new VueRouter({
  routes
})
